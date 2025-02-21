import { BarChart2, DollarSign, Home, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name:"Home", icon:Home, color:"#6366f1", href:"/home" },
  { name:"Overview", icon:BarChart2, color:"#a1ea77", href:"/overview" },
  { name:"Products", icon:ShoppingBag, color:"#8B5cF6", href:"/products" },
  { name:"Users", icon:Users, color:"#EC4899", href:"/users" },
  { name:"Sales", icon:DollarSign, color:"#10B981", href:"/sales" },
  { name:"Orders", icon:ShoppingCart, color:"#F59E0B", href:"/orders" },
  { name:"Analytics", icon:TrendingUp, color:"#3B82F6", href:"/analytics" },
  { name:"Settings", icon:Settings, color:"#6EE7B7", href:"/settings" },
]

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const hiddenPaths = ["/"];
  if (hiddenPaths.includes(location.pathname)) return null;
  return (
    <motion.div
    className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'} {}`}
    animate={{ widths: isSidebarOpen ? 256:80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-5 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={ () => setIsSidebarOpen(!isSidebarOpen) }
        className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit cursor-pointer"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div
              className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 ${isSidebarOpen ? "hover:pl-8 transition-all duration-300" : ""} mb-2`}
              >
                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                    className="ml-4 whitespace-nowrap"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{duration: 0.2}}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ) )}
        </nav>
      </div>
    </motion.div>
  )
}

export default Sidebar