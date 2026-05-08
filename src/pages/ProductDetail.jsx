import { useMemo } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useDashboard } from "../context/DashboardContext";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/products";

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();
  const { state: dashboardState } = useDashboard();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const product = useMemo(() => products.find((item) => item.id === productId), [productId]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const goCheckout = () => {
    if (product.premium && dashboardState.activePlan !== "Pro") {
      navigate("/pricing");
      return;
    }
    if (!auth.isAuthenticated) {
      navigate("/login", { state: { from: `/shop/${product.id}` } });
      return;
    }
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7ead7_0%,#fdf8f1_100%)] px-4 py-8 text-[#1a1a1a] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link to="/shop" className="text-sm font-semibold text-[#2E7D32]">
          ← Back to shop
        </Link>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_20px_60px_rgba(72,42,8,0.1)]">
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(72,42,8,0.1)]">
            <span className="inline-flex rounded-full bg-[#eff7ea] px-3 py-1 text-xs font-semibold text-[#2E7D32]">
              {product.category}
            </span>
            <h1 className="mt-4 text-4xl font-heading font-extrabold text-[#1a1a1a]">{product.title}</h1>
            <p className="mt-3 text-sm leading-7 text-[#666]">{product.description}</p>
            <div className="mt-5 flex items-center gap-4">
              <span className="text-3xl font-bold text-[#E8651A]">{formatPrice(product.price)}</span>
              <span className="rounded-full bg-[#faf4ec] px-3 py-1 text-sm font-semibold text-[#6c5847]">
                {product.rating}★
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {(product.tags || []).map((tag) => (
                <span key={tag} className="rounded-full bg-[#faf4ec] px-3 py-1.5 text-xs font-semibold text-[#6c5847]">
                  {tag}
                </span>
              ))}
            </div>

            {product.premium && (
              <div className="mt-6 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                Premium item. Upgrade your plan to unlock guided previews and exclusive offers.
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={goCheckout}
                className="rounded-full bg-gradient-to-r from-[#E8651A] to-[#2E7D32] px-6 py-3.5 text-sm font-semibold text-white"
              >
                Buy now
              </button>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="rounded-full border border-[#2E7D32]/40 bg-white px-6 py-3.5 text-sm font-semibold text-[#215c28]"
              >
                Add to cart
              </button>
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="rounded-full border border-[#ead7be] bg-[#faf4ec] px-6 py-3.5 text-sm font-semibold text-[#6c5847]"
              >
                {isWishlisted(product.id) ? "Remove wishlist" : "Save wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
