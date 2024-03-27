export interface StudentTableData {
    id: string,
    name: string,
    email: string,
    departmentTitle: string,
    specialityTitle: string,
    group: {
        id: string,
        group: string
    }
}