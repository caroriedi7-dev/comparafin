 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/app/page.js b/app/page.js
index 5947ff91d3bd42693de971576ebe088528a1897a..439bd6d235438282abbf0be20a22be19009b8fa7 100644
--- a/app/page.js
+++ b/app/page.js
@@ -1,95 +1,53 @@
 export default function Home() {
   return (
     <>
-      {/* HERO PREMIUM */}
-      <section
-        style={{
-          display: "grid",
-          gridTemplateColumns: "1.2fr .8fr",
-          gap: 32,
-          alignItems: "center",
-          padding: 32
-        }}
-      >
-        {/* TEXTE */}
-        <div>
-          {/* SELO */}
-          <div
-            style={{
-              display: "inline-flex",
-              alignItems: "center",
-              gap: 8,
-              border: "2px solid var(--gold)",
-              borderRadius: 999,
-              padding: "6px 12px",
-              fontWeight: 900,
-              fontSize: 12,
-              color: "#6a5200",
-              background: "rgba(212,175,55,.15)",
-              marginBottom: 12
-            }}
-          >
-            ⭐ Melhor de 2025
-          </div>
+      {/* HERO */}
+      <section className="hero-lite">
+        <div className="hero-lite-content">
+          <span className="hero-lite-eyebrow">Comparador financeiro independente</span>
 
-          <h1 style={{ marginBottom: 12 }}>
-            Compare contas e cartões bancários no Brasil
-          </h1>
+          <h1>Compare contas e cartões bancários</h1>
 
-          <p style={{ fontSize: 17, maxWidth: 520 }}>
-            Comparador financeiro independente. Compare bancos digitais
-            e tradicionais, taxas e benefícios — de forma clara,
-            gratuita e atualizada.
+          <p>
+            Compare bancos digitais e tradicionais, taxas e benefícios — de forma
+            clara, gratuita e sempre atualizada.
           </p>
 
-          <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
-            <a className="btn" href="/contas">Comparar contas</a>
-            <a className="btn" href="/cartoes">Comparar cartões</a>
-          </div>
+          <ul className="hero-lite-list">
+            <li>Transparente</li>
+            <li>Sem custo</li>
+            <li>Atualizado regularmente</li>
+          </ul>
 
-          <p style={{ marginTop: 14, fontSize: 13, color: "#555" }}>
-            ✔ Transparente · ✔ Sem custo · ✔ Atualizado regularmente
-          </p>
+          <div className="hero-lite-actions">
+            <a className="hero-btn" href="/contas">Comparar contas</a>
+            <a className="hero-btn" href="/cartoes">Comparar cartões</a>
+          </div>
         </div>
 
-        {/* IMAGE PLACEHOLDER (PREMIUM) */}
-        <div
-          style={{
-            height: 320,
-            borderRadius: 20,
-            background:
-              "linear-gradient(135deg, rgba(26,111,122,.22), rgba(26,111,122,.06))",
-            display: "flex",
-            alignItems: "center",
-            justifyContent: "center",
-            color: "#1A6F7A",
-            fontWeight: 900,
-            fontSize: 18,
-            letterSpacing: ".5px"
-          }}
-        >
+        <div className="hero-lite-image">
           IMAGE FINTECH
         </div>
       </section>
 
       {/* TOP PICKS */}
       <section>
         <h2>Top escolhas do Comparafin</h2>
 
         <div
           style={{
             display: "grid",
             gridTemplateColumns: "repeat(3, 1fr)",
             gap: 18
           }}
         >
           <div className="card">
             <span
               style={{
                 display: "inline-block",
                 fontSize: 12,
                 fontWeight: 900,
                 color: "#1A6F7A",
                 marginBottom: 6
               }}
             >
 
EOF
)
