import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

export function getUserDoc(id, callback) {
    var userRoleID, userBirthPlace, userBirthTime, userFirstName, userLastName, userUsername, userPhone, userRole;
    const userQuery = query(collection(db, "user"), where("id", "==", id));
    getDocs(userQuery).then((queryUserSnap) => {
        queryUserSnap.forEach((doc) => {
            userBirthPlace = doc.data().birthPlace;
            userBirthTime = doc.data().birthPlace;
            userFirstName = doc.data().firstName;
            userLastName = doc.data().lastName;
            userUsername = doc.data().username;
            userPhone = doc.data().phone;
            userRoleID = doc.data().roleID;
        });
        const roleQuery = query(collection(db, "role"), where("id", "==", userRoleID));
        getDocs(roleQuery).then((queryRoleSnap) => {
            queryRoleSnap.forEach((doc) => {
                userRole = doc.data().name;
            });
            const userData = {
                userBirthPlace,
                userBirthTime,
                userFirstName,
                userLastName,
                userUsername,
                userPhone,
                userRole,
            };
            callback(userData);
        })
    })
}