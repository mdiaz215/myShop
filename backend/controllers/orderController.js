import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

const addOrderItems = asyncHandler(async (reqres) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if(order){
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if(order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payper.email_address
        }
    const updateOrder = order.save()
    res.json(updateOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

export { addOrderItems, getOrderById, updateOrderToPaid }