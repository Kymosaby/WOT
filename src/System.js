const System = {
    entities : ["request","task"],
    schema : {
        request : {
            state : {
                "overdue" : "overdue",
                "standBy" : "standBy",
                "onTime" : "onTime"
            },
            type : {
                "request" : "request",
                "memo" : "memo",
                "spam" : "spam"
            },
            stage : {
                "unassigned" : "unassigned",
                "assigned" : "assigned",
                "completed" : "completed",
                "rejected" : "rejected",
            }

        },
    },

    reduxSchema : {
        request : "requestReducer"

    }

}
export default System
