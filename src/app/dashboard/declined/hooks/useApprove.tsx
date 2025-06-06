import { protectedApi } from "@/app/utils/apis/api";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';

const useApprove = () => {
    const handleApprove = async ({
        encounterToken
    }: {
        encounterToken : string
    }) => {
        const response = await protectedApi.PATCH(`/claims/update-status/${encounterToken}`, {
            status : "approved"
        })
        return response
    }

    const {
        mutate : handleApproveMutation, 
        isPending : isApprovePending, 
        error : approveError,
        isSuccess : approveSuccess
    } = useMutation({
        mutationFn : handleApprove,
        onSuccess : () => {
            toast.success("Claim Approved Successfully")   
        }
    })

    return {
        handleApproveMutation,
        isApprovePending,
        approveError,
        approveSuccess
    }
}
export default useApprove