export interface addLeaveEntitlementBody {
    empNumber: string,
    leaveTypeId: number,
    fromDate: string,
    toDate: string,
    entitlement: string
}

export interface requestLeaveBody {
    leaveTypeId: number,
    fromDate: string,
    toDate: string,
    comment: string,
    duration: {
        type: string
    },
    partialOption: string
}

export interface approveRequestLeaveBody {
    action: string;
}