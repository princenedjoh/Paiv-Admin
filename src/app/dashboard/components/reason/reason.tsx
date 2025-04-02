import Button from "@components/button/button"
import Container from "@components/container/container"
import Overlay from "@components/overlay/overlay"
import PopupAnimation from "@components/popup/popupAnimation"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import theme from "@styles/theme"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"

const Reason = ({
    isVisible = true,
    close,
    handleSubmit
} : {
    isVisible? : boolean
    close? : ()=>void
    handleSubmit? : (value:string)=>void
}) => {
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);
    const [value, setValue] = useState("")
    return (
        <AnimatePresence>
            {
                isVisible ?
                <Overlay onClick={close} key={0}>
                    <PopupAnimation>
                        <Container
                            isVisible={isVisible}
                            close={close}
                        >
                            <div className="w-[450px] flex flex-col gap-2">
                                {/* Title */}
                                <div className="bg-[#1F1F28] border-solid border-b-[1px] border-border-secondary rounded-t-[20px] h-[55px] flex items-center pl-6">
                                    <Text bold={TypographyBold.md}>
                                        Confirmation
                                    </Text>
                                </div>

                                {/* Reason */}
                                <div className="w-full flex flex-col gap-1 px-5 py-2">
                                    <Text className="pl-1">
                                        Reason
                                    </Text>
                                    <div
                                        className={`flex w-full h-fit min-h-[100px] flex-1 gap-2 px-3 py-[10px] rounded-xl bg-bg-tetiary border-border-tetiary border-[1px] border-solid duration-200`}
                                        style={{
                                            borderColor: (inputFocus || hover) ? theme.colors.main.primary : theme.colors.border.secondary
                                        }}
                                    >
                                        <textarea
                                            className="flex w-full flex-1 bg-transparent outline-none placeholder:text-[12px] placeholder:text-text-tetiary text-text-primary md:text-[12px] text-[16px]"
                                            placeholder="Please provide a reason for declining the claim"
                                            onFocus={(e) => {
                                                setInputFocus(true);
                                            }}
                                            onBlur={(e) => {
                                                setInputFocus(false);
                                            }}
                                            onMouseOver={(e) => {
                                                setHover(true);
                                            }}
                                            onMouseLeave={(e) => {
                                                setHover(false);
                                            }}
                                            value={value}
                                            onChange={e => setValue(e.target.value)}
                                        >

                                        </textarea>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="bg-[#1F1F28] border-solid border-t-[1px] border-border-secondary rounded-b-[20px] h-[55px] flex items-center pl-6">
                                    <div className="w-full flex justify-end gap-2 items-center h-full px-6">
                                        <Button
                                            text="Cancel"
                                            className="!bg-[#BA3D36] !border-none"
                                            onClick={close}
                                        />
                                        <Button 
                                            text="Approve"
                                            className="!bg-[#2D7F41] !border-none"
                                            onClick={handleSubmit ? ()=>handleSubmit(value) : ()=>{}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </PopupAnimation>
                </Overlay>
                :
                <></>
            }
        </AnimatePresence>
    )
}
export default Reason