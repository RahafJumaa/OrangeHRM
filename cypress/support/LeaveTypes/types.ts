export interface AddLeaveEntitlementBody {
    empNumber: string,
    leaveTypeId: number,
    fromDate: string,
    toDate: string,
    entitlement: string
}

export interface RequestLeaveBody {
    leaveTypeId: number,
    fromDate: string,
    toDate: string,
    comment: string,
    duration: {
        type: string
    },
    partialOption: string
}

export interface ApproveRequestLeaveBody {
    action: string;
}