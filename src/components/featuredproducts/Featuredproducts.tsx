import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Products as pd } from "../../data/Products";
import { useNavigate } from "react-router-dom";

export default function Featuredproducts() {
    const navigate = useNavigate()
    return (
        <div>
            <h2 className="my-8 text-3xl md:text-4xl font-extrabold tracking-tight">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pd.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            className="h-full flex flex-col"
                            sx={{
                                backgroundColor: "#181818",
                                borderRadius: "10px",
                                boxShadow: `
                                        0 4px 10px rgba(0, 0, 0, 0.6),
                                        0 10px 25px rgba(0, 0, 0, 0.4)
                                    `,
                                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: `
                                        0 8px 20px rgba(0, 0, 0, 0.7),
                                        0 20px 40px rgba(0, 0, 0, 0.5)
                                        `,
                                },
                            }}
                        >
                            <CardActionArea className="flex-1" onClick={() => navigate(`/product/${item.slug}`)}>
                                <div className="h-48 w-full overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <CardContent className="flex-1 text-center">
                                    <Typography
                                        variant="subtitle1"
                                        className="font-medium"
                                        sx={{ color: "#E6EDF3", fontWeight: "Bold" }}
                                    >
                                    {item.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ color: "#E6EDF3",fontSize:"12px" }}
                                    >
                                       Starting from  ₹{item.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
