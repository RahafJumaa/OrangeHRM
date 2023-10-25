import {AddLeaveEntitlementBody,RequestLeaveBody,ApproveRequestLeaveBody} from "../../../support/LeaveTypes/types";
class dataUtils {
   addLeaveEntitlement(AddLeaveEntitlementBody : AddLeaveEntitlementBody){
    return cy.request({
        method: 'POST',
        url: '/api/v2/leave/leave-entitlements',
        body: 
        AddLeaveEntitlementBody
      }).then((response) => response.body
      );
   }

   requestLeave(RequestLeaveBody : RequestLeaveBody){
    return cy.request({
        method: 'POST',
        url: '/api/v2/leave/leave-requests',
        body: 
        RequestLeaveBody
      }).then((response) => response.body
      );
   }

   approveLeaveRequest(ApproveRequestLeaveBody : ApproveRequestLeaveBody , id : number){
    return cy.request({
        method: 'PUT',
        url: '/api/v2/leave/employees/leave-requests/'+id+'',
        body: 
        ApproveRequestLeaveBody
      }).then((response) => response.body
      );
   }
}
export default dataUtils;