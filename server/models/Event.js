import mongoose, { mongo } from "mongoose"

const eventSchema = mongoose.Schema({
    userId: String,
    assignee: String,
    title: String,
    description: String,
    start: {
        type: Date,
        default: new Date(),
    },
    end: {
        type: Date,
        default: new Date(),
    },

}, { timestamps: true })

// const EventModel = mongoose.model('Event', eventSchema)

// export default EventModel

export default mongoose.model('Event', eventSchema)