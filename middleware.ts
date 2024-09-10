import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

// This example requires login only for the '/talk' route
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    async afterAuth(auth, req, evt) {
        // Check if the request is for the '/talk' route
        if (req.nextUrl.pathname === "/talk" && !auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        // Optionally, you can perform additional actions here after authentication
        // For example, updating the user's information in your backend
        if (auth.userId) {
            const result = await fetch(process.env.API_ADDRESS + "/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: auth.userId
                })
            });
            await result.json();
        }
    },
});

export const config = {
    matcher: ["/talk"], // Only match the '/talk' route
};