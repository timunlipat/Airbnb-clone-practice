import EmptyState from "../Components/EmptyState"
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoriteClient from "./FavoriteClient";

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no have no favorite listings."
            />
        )
    }
    
    return (
        <FavoriteClient
            listings={listings}
            currentUser={currentUser}
        />
    )
    
}

export default ListingPage;