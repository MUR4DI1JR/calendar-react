import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface EventTypes {
    guests: IUser[];
    event: IEvent[];
}

export enum EventActionEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS"
}

export interface SetGuestsAction {
    event: EventActionEnum.SET_GUESTS,
    payload: IUser[]
}

export interface SetEventAction {
    event: EventActionEnum.SET_EVENTS,
    payload: IEvent[]
}

export type EventAction =
    SetEventAction |
    SetGuestsAction