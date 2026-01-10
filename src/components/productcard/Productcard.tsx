import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import type { Product } from "../../data/Products";

interface ProductCardProps {
  products: Product[];
}

export default function Productcard({products}:ProductCardProps) {
    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                    <Card key={item.id} className="h-full flex flex-col" sx={{
                        backgroundColor: "#111827",
                    }}>
                        <CardActionArea className="flex-1">
                            <div className="h-48 w-full overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <CardContent className="flex-1 text-center">
                                <Typography variant="subtitle1" className="font-medium" sx={{ color: "#E6EDF3", fontWeight: 500 }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle1" className="font-medium" sx={{ color: "#E6EDF3", fontWeight: 500 }}>
                                    ₹{item.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
    );
}
