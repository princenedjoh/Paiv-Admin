import Text from "@styles/components/text"
import theme from "@styles/theme"
import { FaSquareCheck } from "react-icons/fa6"
import { useApprovedContext } from "../context/context"
import { useEffect } from "react"

const useClaimsTable = () => {
    const {isAllClaimsSelected, handleSelectAllClaims, handleUnselectAllClaims} = useApprovedContext()

    const columns = [
        {
            accessorKey : 'selectable',
            header : ()=> (
                isAllClaimsSelected
                ? <FaSquareCheck 
                    size={20}
                    color={theme.colors.main.primary}
                    className="rounded-[6px] mt-2 overflow-hidden relative w-[20px] h-[20px] bg-bg-tetiary cursor-pointer"
                    onClick={(e)=>{
                        e.stopPropagation()
                        handleUnselectAllClaims()
                    }} 
                />
                : <div 
                    onClick={(e)=>{
                        e.stopPropagation()
                        handleSelectAllClaims()
                    }} 
                    className="rounded-[6px] mt-2 overflow-hidden relative w-[20px] h-[20px] bg-bg-tetiary cursor-pointer"
                />
            ),
            cell : ({getValue} : {getValue : any}) => {
                return (
                    <Text>
                        {getValue()}
                    </Text>
                )
            }
        },
        {
            accessorKey : 'hospitalName',
            header : 'Hospital Name',
            cell : ({getValue} : {getValue : any}) => {
                return (
                    <Text>
                        {getValue()}
                    </Text>
                )
            }
        },
        {
            accessorKey : 'location',
            header : 'Location',
            cell : ({getValue} : {getValue : any}) => {
                return (
                    <Text>
                        {getValue()}
                    </Text>
                )
            }
        },
        {
            accessorKey : 'patientName',
            header : 'Patient Name',
            cell : ({getValue} : {getValue : any}) => {
                return (
                    <Text>
                        {getValue()}
                    </Text>
                )
            }
        },
        {
            accessorKey : 'diagnosis',
            header : 'Diagnosis',
            cell : ({getValue} : {getValue : any}) => {
                return (
                    <Text>
                        {getValue()}
                    </Text>
                )
            }
        },
        {
            accessorKey : 'drugs',
            header : 'Drugs',
            cell : ({getValue} : {getValue : any}) => {
                return (
                    <Text>
                        {getValue()}
                    </Text>
                )
            }
        },
    ]
    return {columns}
}
export default useClaimsTable