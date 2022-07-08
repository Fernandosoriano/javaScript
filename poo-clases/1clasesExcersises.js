{ //1.-Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
    //  The circles constructed must have two methods getArea() (PI*r^2)
    //  and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
    // https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ

    class circle {
        constructor(radius) {
            this.radius = radius;
        }
        getArea() {
            console.log(Math.PI * this.radius ** 2);
        }
        getPerimeter() {
            console.log(2 * Math.PI * this.radius);
        }
    }
    // const circy = new circle(4.44);
    // circy.getPerimeter();
    // let circy = new circle(11);
    // circy.getArea();
}