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
        <>
            {algorithmData.algorithms.map((algorithm, index) => (
                <Card className="mt-4" key={index}>
                    <CardHeader>
                        <p>
                            {algorithm.function} - {algorithmData.dataStruct}
                        </p>
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
        </>
    );
}
