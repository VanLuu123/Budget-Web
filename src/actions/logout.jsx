// react router dom imports
import { redirect } from "react-router-dom"

// helpers
import { deleteItem } from "../helpers"

// library
import { toast } from "react-toastify"

export async function logoutAction(){
    // delete user
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })
    toast.success("Your account is successfully deleted!")
    //return redirect
    return redirect("/")
}