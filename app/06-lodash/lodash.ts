const _ = require('lodash');


function concatArrays() {
    let other = _.concat([1], 2, [3], [[4]]);

    console.log(other);
}


function groupingByFirstLetter() {

    let jsonData =
        [
            {
                "type": "specialListDTO",
                "firstName": "Bruno",
                "fullName": "Bruno Mars",
                "lastName": "Mars",
                "middleName": "",
                "status": "ACTIVE",
                "userName": "bruno@finantix.com"
            },
            {
                "type": "specialListDTO",
                "firstName": "Chris",
                "fullName": "Chris Brown",
                "lastName": "Brown",
                "middleName": "",
                "status": "ACTIVE",
                "userName": "agent@finantix.com"
            },
            {
                "type": "specialListDTO",
                "firstName": "Jenifer",
                "fullName": "Jenifer Lopez",
                "lastName": "Lopez",
                "middleName": "",
                "status": "INACTIVE",
                "userName": "jenifer@finantix.com"
            },
            {
                "type": "specialListDTO",
                "firstName": "Justin",
                "fullName": "Justin Bieber",
                "lastName": "Bieber",
                "middleName": "",
                "status": "ACTIVE",
                "userName": "justin@finantix.com"
            },
            {
                "type": "specialListDTO",
                "firstName": "Katy",
                "fullName": "Katy Perry",
                "lastName": "Perry",
                "middleName": "",
                "status": "ACTIVE",
                "userName": "katy@finantix.com"
            },
            {
                "type": "specialListDTO",
                "firstName": "Chen",
                "fullName": "Rita  Chen",
                "lastName": "Rita",
                "middleName": "",
                "status": "ACTIVE",
                "userName": "rita0403@finantix.com"
            }
        ];

    let groupData = _.groupBy(jsonData, (item) => {
        return item.fullName[0];
    });

    _.forEach(groupData, (item, index) => {
        console.log('item', item);
        console.log('index type:', index);
    });

}

console.log(groupingByFirstLetter());