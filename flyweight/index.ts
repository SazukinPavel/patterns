import Forest from "./models/Forest";

const forest=new Forest([])

forest.randomForestGenerator(10000)

forest.printForest()