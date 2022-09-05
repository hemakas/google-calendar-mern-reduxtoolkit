import Event from "../models/Event";

// fetch all events
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.status(200).json(events)
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" })
    }
} 

// save event
export const createEvent = async (req, res) => {
    const event = req.body

    const newEvent = new Event({ ...event }) 

    try {
        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" })
    }
}

