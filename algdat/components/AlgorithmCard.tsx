import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

interface Algorithm {
    function: string;
    description: string;
    returns: string;
}

interface AlgorithmCardProps {
    algorithmData: {
        dataStruct: string;
        algorithms: Algorithm[];
    }
}

export const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algorithmData }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4 mt-10 text-center text-blue-800">
                {algorithmData.dataStruct}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-20">
                {algorithmData.algorithms.map((algorithm, index) => (
                    <Card className="mt-4" key={index}>
                        <CardHeader>
                            <p>{algorithm.function}</p>
                        </CardHeader>
                        <Divider orientation="horizontal" />
                        <CardBody>
                            <p>{algorithm.description}</p>
                        </CardBody>
                        <CardFooter>
                            <p>{algorithm.returns}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
