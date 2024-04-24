import { Button } from "antd";

function UserCard({ character }) {
   
    const { name, image } = character




    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105 group bg-slate-300">
            <div className="overflow-hidden aspect-video bg">
                <img className="w-full transition-all duration-500 rounded-md group-hover:scale-150" src={image} alt="card image" />
            </div>
            <h2 className="my-2 font-bold">{name}</h2>
            <Button>ver mas</Button>
        </div>
    )
}
export default UserCard;