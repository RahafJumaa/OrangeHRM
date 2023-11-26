import {addLeaveEntitlementBody,requestLeaveBody,approveRequestLeaveBody} from "../../../support/LeaveTypes/types";
import {createLeaveEntitlementBody,createRequestLeaveBody,createApproveRequestLeaveBody} from "../../../support/LeaveTypes/constants";

class LeavePageDataUtils {
   addLeaveEntitlement(addLeaveEntitlementBody : addLeaveEntitlementBody){
    return cy.request({
        method: 'POST',
        url: '/api/v2/leave/leave-entitlements',
        body: 
        createLeaveEntitlementBody(addLeaveEntitlementBody)
      }).then((response) => response.body
      );
   }

   requestLeave(requestLeaveBody : requestLeaveBody){
    return cy.request({
        method: 'POST',
        url: '/api/v2/leave/leave-requests',
        body: 
        createRequestLeaveBody(requestLeaveBody)
      }).then((response) => response.body
      );
   }

   approveLeaveRequest(approveRequestLeaveBody : approveRequestLeaveBody , id : number){
    return cy.request({
        method: 'PUT',
        url: `/api/v2/leave/employees/leave-requests/${id}`,
        body: 
        createApproveRequestLeaveBody(approveRequestLeaveBody)
      }).then((response) => response.body
      );
   }
}
export default LeavePageDataUtils;