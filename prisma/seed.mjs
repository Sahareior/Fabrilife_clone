import { PrismaClient } from "@prisma/client";


const database = new PrismaClient()

async function main(){
    try{
        await database.category.createMany({
            data: [
                {name: "Computer Science"},
                {name: "Music"},
                {name: "Fitness"},
                {name: "Photography"},
                {name: "Engneering"},
                {name: "Filming"},
            ]
        })
        console.log("done")
    }
    catch(ere){
        console.log(ere)
    }
}
main()