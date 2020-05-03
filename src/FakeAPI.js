const api = {
    "Requests" : {
        "schema" : [
            "id",
            "from",
            "subject",
            "receiver",
            "start Date",
            "scope",
            "hits",
        ],
        "groups" : {
            "date" : [
                "today",
                "yesterday",
                "olders"
            ],
        },
        "filters" : [
            "team",
            "date",
            "workGroup"
        ],
        "requests" : [
            // {
            //     "id" : "123784",
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
            //     "id" : "112389",
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
            //     "id" : "111123",
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
            //     "id" : "1123322",
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
            //     "id" : "552413",
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
            //     "id" : "11122233",
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
                "id" : "40536",
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
                "id" : "3333",
                "type" : "unassigned",
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
                "id" : "44236",
                "type" : "unassigned",
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