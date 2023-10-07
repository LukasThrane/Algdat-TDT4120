
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
        <>
            <h1>{algorithmData.function}</h1>
        </>
    )
}