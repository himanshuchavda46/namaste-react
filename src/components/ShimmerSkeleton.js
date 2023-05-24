const ShimmerSkeleton = () => {
    return (
        <div className="shimmer-card-list">
            {
                Array(10).fill("").map((e,index)=><div key={index} className="shimmer-card"/>)
            }
        </div>
    )
}
export default ShimmerSkeleton;
