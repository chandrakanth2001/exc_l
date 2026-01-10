import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Products as pd } from '../../data/Products';

export default function Featuredproducts() {
    return (
        <div>
            <h2 className="my-8 text-3xl md:text-4xl font-extrabold tracking-tight">
                Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    pd.map((item) => {
                        return (
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
                        )
                    })
                }
            </div>
        </div>
    );
}