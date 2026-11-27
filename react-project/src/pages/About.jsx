import Students from "@/components/Students"
import { Button } from "@/components/ui/button"
import Count from "@/hooks/Count"
import Register from "@/hooks/Register"
import Users from "@/hooks/Users"

const About = () => {
    let name = 'test'
    let age = 20

    return (
        <>
            <div>
                <Count />
            </div>
            <Users />
            <Register />

            <div className="flex flex-col items-center gap-4 p-4">

                <Button variant="default">Default</Button>

                <Button variant="destructive">Delete</Button>

                <Button variant="outline">Outline</Button>

                <Button variant="secondary">Secondary</Button>

                <Button variant="ghost">Ghost</Button>

                <Count />

                <h1>This is {name}</h1>

                <p>Age: {age}</p>

                <Students name={name} age={age} />

                <Button>Click Me</Button>

            </div>
        </>
    )
}

export default About