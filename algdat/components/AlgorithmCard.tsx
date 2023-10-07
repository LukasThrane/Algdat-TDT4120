import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

interface AlgorithmCardProps {
    algorithmData: {
        function: string;
        dataStructure: string;
        returns: string;
        description: string;
    }
}

export const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algorithmData }) => {
    return (
        <Card className="mt-4">
            <CardHeader>
                <p>
                    {algorithmData.function} - {algorithmData.dataStructure}
                </p>
            </CardHeader>
            <Divider orientation="horizontal" />
            <CardBody>
                <p>{algorithmData.description}</p>
            </CardBody>
            <CardFooter>
                <p>{algorithmData.returns}</p>
            </CardFooter>
        </Card>
    )
}