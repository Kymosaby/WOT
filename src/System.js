const System = {
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
    }
}
export default System
