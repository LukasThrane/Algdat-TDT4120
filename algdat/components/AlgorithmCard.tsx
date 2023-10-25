import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

interface Algorithm {
    function: string;
    description: string;
    returns: string;
}

interface DataStructureCardProps {
    dataStructureData: {
        dataStruct: string;
        id: string;
        algorithms: Algorithm[];
    }
}

export const AlgorithmCard: React.FC<DataStructureCardProps> = ({ dataStructureData }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4 mt-12 text-center text-blue-400">
                {dataStructureData.dataStruct}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-20">
                {dataStructureData.algorithms.map((algorithm, index) => (
                    <Card className="mt-4" key={index}>
                        <CardHeader>
                            <p>{algorithm.function}</p>
                        </CardHeader>
                        <Divider orientation="horizontal" />
                        <CardBody>
                            <p>{algorithm.description}</p>
                            <p className="mt-5">Returns: {algorithm.returns}</p>
                        </CardBody>
                        <CardFooter className="">
                            <Button>
                                <Link href={`/datastructures/${dataStructureData.id}`}>
                                    <a>Learn More</a>
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
