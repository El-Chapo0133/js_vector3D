const POSITIVE = 0
const NEGATIVE = 1

class Vector3D {
    constructor() {

    }
    setDefault() {
        this.data.x = 0
        this.data.y = 0
        this.data.z = 0
        this.data.direction = POSITIVE
        this.data.power = 1
    }
    get X() {
        return this.data.x
    }
    get Y() {
        return this.data.y
    }
    get Z() {
        return this.data.z
    }
    get Power() {
        return this.data.power
    }
    set X(value) {
        this.data.x = value
    }
    set Y(value) {
        this.data.y = value
    }
    set Z(value) {
        this.data.z = value
    }
    set Power(value) {
        this.data.power = value
    }
    setToPositive() {
        this.data.direction = POSITIVE
    }
    setToNegative() {
        this.data.direction = NEGATIVE
    }
    add(p_vector) {
        let r_vector = new Vector2D(this.X() + p_vector.X(), this.Y() + p_vector.Y(), this.Z() + p_vector.Z())
        return r_vector
    }
    substract() {

    }
    destroy() {
        this.data = null
    }
    clone() {

    }
    isNull(value) {
        if (value === null)
            return true
        else
            return false
    }
}