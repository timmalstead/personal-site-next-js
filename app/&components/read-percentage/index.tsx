"use client"
import { useRef, useEffect, useState, type ReactNode } from "react"

interface ReadPercentageProps {
    children: ReactNode
}

const locator = "read-percentage"
const ReadPercentage = ({ children }: ReadPercentageProps) => {
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
    const [readPercentage, setReadPercentage] = useState<number>(0)

    useEffect(() => {
        if (scrollRef.current) {
            const observer = new IntersectionObserver(
                ([{ isIntersecting }]) => {
                    setIsIntersecting(isIntersecting)
                }
            )
            observer.observe(scrollRef.current)
            return () => observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (isIntersecting) {
                const {
                    top: topOfMeasuredElement,
                    height: totalHeightOfMeasuredElement,
                } = scrollRef.current?.getClientRects()[0] as DOMRect

                const {
                    scrollY: amountScrolledFromTopOfDocument,
                    innerHeight: viewportSize,
                } = window

                const { scrollTop: totalDistanceBeforeMeasuredElement } =
                    document.documentElement

                const bottomEdgeOfViewport =
                    amountScrolledFromTopOfDocument + viewportSize
                const startOfElement =
                    topOfMeasuredElement + totalDistanceBeforeMeasuredElement

                const percentageRead =
                    ((bottomEdgeOfViewport - startOfElement) /
                        totalHeightOfMeasuredElement) *
                    100

                requestAnimationFrame(() => setReadPercentage(percentageRead))
            }
        }
        addEventListener("scroll", handleScroll)
        return () => removeEventListener("scroll", handleScroll)
    }, [isIntersecting])

    return (
        <>
            {isIntersecting && (
                <progress
                    data-testid={locator}
                    className={locator}
                    value={readPercentage}
                    max={100}
                />
            )}
            <div ref={scrollRef}>{children}</div>
        </>
    )
}

export default ReadPercentage
