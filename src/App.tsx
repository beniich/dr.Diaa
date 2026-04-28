/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { RecipeExplorer } from "./pages/RecipeExplorer";
import { MealPlanner } from "./pages/MealPlanner";
import { Market } from "./pages/Market";
import { Artisans } from "./pages/Artisans";
import { Profile } from "./pages/Profile";
import { RecipeDetail } from "./pages/RecipeDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recipes" element={<RecipeExplorer />} />
          <Route path="/planner" element={<MealPlanner />} />
          <Route path="/market" element={<Market />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          {/* Fallback for other favorites/tabs */}
          <Route path="/favorites" element={<RecipeExplorer />} />
        </Routes>
      </Layout>
    </Router>
  );
}
