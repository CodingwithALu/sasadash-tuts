

interface Donate {
    id: number
    fund_id: number
    full_name: string
    amount: number
    status: string
    payment_method: string
    transfer_note: string
    donation_date: Date
    va_number: string
    create_at: Date
    note?: string
}
export interface DonationsResponse {
    donations: Donate[]
}