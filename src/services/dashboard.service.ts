import apiService from "@/network/apiService"
import { Api } from "@/network/axiosInstance"
import { DashboardType } from "@/schema/dashboard.schema"
import { useQuery } from "@tanstack/react-query"

const getAll = async () => {
    return (await apiService.get<DashboardType[]>(Api, '/dashboard'))
}

export const useGetAllDashboard = () => {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: getAll
    })
}