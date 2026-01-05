import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Products } from "../../data/Products";

export default function Productcard() {
    return (
        <div>
            <h3 className="my-5 text-xl font-semibold">Products</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Products.map((item) => (
                    <Card key={item.id} className="h-full flex flex-col">
                        <CardActionArea className="flex-1">
                            <div className="h-48 bg-gray-100 flex items-center justify-center p-3">
                                <img src={item.image} alt={item.name} className="max-h-full object-contain" />
                            </div>

                            <CardContent className="flex-1 text-center">
                                <Typography variant="subtitle1" className="font-medium">
                                    {item.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    );
}
