import {IUser} from "../../../models/IUser";
import {EventActionEnum, SetEventAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import UserService from "../../../api/userService";

export const EventActionCreators = {
    setGuests: (paylaod: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (paylaod: IEvent[]): SetEventAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try{
            const response = await UserService.getUsers();
            dispatch(EventActionCreators.setGuests(response.data))
        }catch (e) {
            console.log(e);
        }
    }
}