import { addLeaveEntitlementBody,requestLeaveBody,approveRequestLeaveBody } from "./types";

export const createLeaveEntitlementBody = (addLeaveEntitlementBody : addLeaveEntitlementBody) => {
    return {
        ...addLeaveEntitlementBody,
    }
};

export const createRequestLeaveBody = (requestLeaveBody : requestLeaveBody) => {
    return {
        ...requestLeaveBody,
    }
};

export const createApproveRequestLeaveBody = (approveRequestLeaveBody : approveRequestLeaveBody) => {
    return {
        ...approveRequestLeaveBody,
    }
};

