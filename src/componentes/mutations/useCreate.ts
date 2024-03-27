import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useCreateProject() {
    const router = useRouter()
    return useMutation({
        mutationFn: (data) => api.createProject(data),
        onMutate: () => {
            console.log('onMutate:');
        },
        onSuccess: () => {

            router.push('/projects')
        },
        onError: (error) => {
            console.error('Error:', error);
        }
    })
}