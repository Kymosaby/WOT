const api = {
    "Requests" : {
        "schema" : [
            "ID",
            "From",
            "Subject",
            "Receiver",
            "Start Date",
            "Scope",
            "Hits",
        ],
        "groups" : {
            "date" : [
                "today",
                "yesterday",
                "olders"
            ],
        },
        "filters" : [
            "Team",
            "Date",
            "WorkGroup"
        ],
        "requests" : [
            // {
            //     "ID" : "123784",
            //     "type" : "unassigned",
            //     "from": "manuel_ibar@bp.com",
            //     "subject" : "Pasame la mayonesa",
            //     "receiver" : "manuel_ibar@accenture.com",
            //     "startDate": "2019-24-08",
            //     "hits" : 3,
            //     "scope" : "GT1",
            //     "state" : "onTime",
            //     "groups" : {
            //         "date" : "today"
            //     },
            //     "workGroup": "BP",
            // },
            // {
            //     "ID" : "112389",
            //     "type" : "unassigned",
            //     "from": "manuel.ibar@hotmail.com",
            //     "subject" : "dentro del contexto de la funcion",
            //     "receiver" : "ever.rivero@gmail.com",
            //     "startDate": "2019-24-08",
            //     "hits" : 8,
            //     "scope" : "GT1",
            //     "state" : "onTime",
            //     "groups" : {
            //         "date" : "today"
            //     },
            //     "workGroup": "BP",
            // },
            // {
            //     "ID" : "111123",
            //     "type" : "unassigned",
            //     "from": "esteban.morales@yahoo.com.ar",
            //     "subject" : "crear tus propios tipos de datos",
            //     "receiver" : "peruanenzo@bp.com",
            //     "startDate": "2019-24-08",
            //     "hits" : 0,
            //     "scope" : "GT1",
            //     "state" : "overdue",
            //     "groups" : {
            //         "date" : "today"
            //     },
            //     "workGroup": "BP",
            // },
            // {
            //     "ID" : "1123322",
            //     "type" : "unassigned",
            //     "from": "manuel_ibar@hotmail.com",
            //     "subject" : "le quiero poner la llave",
            //     "receiver" : "tortmundo@shell.com",
            //     "startDate": "2019-24-08",
            //     "hits" : 1, 
            //     "scope" : "WOT",
            //     "state" : "onTime" ,
            //     "groups" : {
            //         "date" : "yesterday"
            //     },
            //     "workGroup": "BP",
            // },
            // {
            //     "ID" : "552413",
            //     "type" : "unassigned",
            //     "from": "bjorn@naguili.res",
            //     "subject" : "Const F = y el equis",
            //     "receiver" : "manolito@outlook.com",
            //     "startDate": "2019-24-08",
            //     "hits" : 0,
            //     "scope" : "WOT",
            //     "state" : "overdue" ,
            //     "groups" : {
            //         "date" : "olders"
            //     },
            //     "workGroup": "BP",
            // },
            // {
            //     "ID" : "11122233",
            //     "type" : "unassigned",
            //     "from": "pura@css.com",
            //     "subject" : "mas facil de reutilizar",
            //     "receiver" : "feo@queka.com",
            //     "startDate": "2019-24-08",
            //     "hits" : 3,
            //     "scope" : "GT1",
            //     "state" : "onTime",
            //     "groups" : {
            //         "date" : "yesterday"
            //     },
            //     "workGroup": "BP",
            // },
            {
                "ID" : "40536",
                "type" : "unassigned",
                "from": "condicional@yahoo.com",
                "subject" : "return dos mas dos",
                "receiver" : "else@gmail.com",
                "startDate": "2019-24-08",
                "hits" : 12,
                "scope" : "GT1",
                "state" : "onTime",
                "groups" : {
                    "date" : "today"
                },
                "workGroup": "BP",
            },
            {
                "ID" : "3332123",
                "from": "libreria@yahoo.com",
                "subject" : "apurate neneeee",
                "receiver" : "global@gmail.com",
                "startDate": "2019-24-08",
                "hits" : 39,
                "scope" : "WOT",
                "state" : "standBy",
                "groups" : {
                    "date" : "today"
                },
                "workGroup": "BP",
            },
            {
                "ID" : "442222536",
                "from": "solucionar@yahoo.com",
                "subject" : "funciones de la lubrearia",
                "receiver" : "else@outlook.com",
                "startDate": "2019-24-08",
                "hits" : 2,   
                "scope" : "GT1",
                "state" : "standBy",
                "groups" : {
                    "date" : "today"
                },
                "workGroup": "BP",
            }
        ]
    },
    "User" : {
        "nickName" : "Manu"
    },

}
export default api;