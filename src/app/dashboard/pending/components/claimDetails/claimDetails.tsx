'use client'

import { useState, useEffect } from "react";
import Container from "@components/container/container";
import Overlay from "@components/overlay/overlay";
import Text from "@styles/components/text";
import { TypographyBold } from "@styles/style.types";
import { AnimatePresence } from "framer-motion";
import Reason from "./components/reason";
import Diagnosis from "./components/diagnosis/diagnosis";
import { useApprovedContext } from "../../context/context";
import Drugs from "./components/drugs/drugs";
import Button from "@components/button/button";
import { IClaimsDetailType } from "@/app/dashboard/utils/types";
import theme from "@styles/theme";

const ClaimDetails = ({
    claimDetails
} : {
    claimDetails: IClaimsDetailType
}) => {
    const { showClaimDetail, setShowClaimDetail } = useApprovedContext();
    const [maxHeight, setMaxHeight] = useState<number | null>(null);

    useEffect(() => {
        const updateHeight = () => {
            setMaxHeight(window.innerHeight - 300);
        };

        updateHeight(); // Set initial height
        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return (
        <AnimatePresence>
            {showClaimDetail && (
                <Overlay 
                    onClick={() => setShowClaimDetail(false)} 
                    className="!px-6"
                >
                    <Container 
                        isVisible={showClaimDetail} 
                        close={() => setShowClaimDetail(false)} 
                        className={``}
                    >
                        <div
                            className="md:w-[800px] w-full flex flex-col"
                        >
                            <div className="bg-[#1F1F28] border-solid border-b-[1px] border-border-secondary rounded-t-[20px] h-[55px] flex items-center pl-6">
                                <Text bold={TypographyBold.md}>
                                    Claim Details
                                </Text>
                            </div>

                            {/* Scrollable Content */}
                            <div 
                                className="flex flex-col gap-3 pb-4 px-4 overflow-y-auto pt-4"
                                style={{
                                    maxHeight: maxHeight ? `${maxHeight}px` : "800px",
                                }}
                            >
                                {
                                    claimDetails.reasons ?
                                    <Reason reasons={claimDetails.reasons}/> : <></>
                                }
                                <Diagnosis diagnosis={claimDetails.diagnosis} />
                                <Drugs drugs={claimDetails.drugs} />
                                
                                {/* Payout */}
                                <div className="flex gap-2 items-center">
                                    <Text
                                        textColor={theme.colors.text.tetiary}
                                    >
                                        Total Payout:
                                    </Text>
                                    <Text
                                        bold={TypographyBold.md2}
                                    >
                                        Pending...
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default ClaimDetails;
