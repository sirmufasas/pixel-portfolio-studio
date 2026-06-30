import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Trash2, Plus, LogOut, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin — Khomba Group" }] }),
  component: AdminPage,
});

type Company = {
  id: string;
  name: string;
  tag: string;
  url: string;
  image_url: string | null;
  blurb: string | null;
  sort_order: number;
};

function AdminPage() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [companies, setCompanies] = useState<Company[]>([]);
  const [form, setForm] = useState({
    name: "",
    tag: "",
    url: "",
    image_url: "",
    blurb: "",
    sort_order: 10,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      setUserEmail(userData.user.email ?? "");
      setUserId(userData.user.id);
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userData.user.id);
      setIsAdmin((roles ?? []).some((r) => r.role === "admin"));
      await loadCompanies();
    })();
  }, []);

  const loadCompanies = async () => {
    const { data, error } = await supabase
      .from("companies")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) {
      toast.error(error.message);
      return;
    }
    setCompanies(data as Company[]);
  };

  const addCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("companies").insert({
      name: form.name.trim(),
      tag: form.tag.trim(),
      url: form.url.trim(),
      image_url: form.image_url.trim() || null,
      blurb: form.blurb.trim() || null,
      sort_order: form.sort_order,
    });
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Company added");
    setForm({ name: "", tag: "", url: "", image_url: "", blurb: "", sort_order: 10 });
    loadCompanies();
  };

  const remove = async (id: string) => {
    if (!confirm("Remove this company?")) return;
    const { error } = await supabase.from("companies").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Removed");
    loadCompanies();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  if (isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream text-navy/60">
        Loading…
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-6">
        <div className="max-w-lg text-center bg-card border border-border rounded-2xl p-10">
          <ShieldAlert className="h-10 w-10 text-gold mx-auto" />
          <h1 className="mt-4 font-serif text-3xl text-navy">Not yet a custodian</h1>
          <p className="mt-3 text-sm text-navy/65">
            Your account exists, but you have not been granted admin rights yet.
            Run this once in the database (Cloud → SQL), then refresh:
          </p>
          <pre className="mt-4 text-left bg-navy text-cream/90 text-xs rounded-lg p-4 overflow-x-auto">
{`insert into public.user_roles (user_id, role)
values ('${userId}', 'admin');`}
          </pre>
          <p className="mt-3 text-xs text-navy/50">{userEmail}</p>
          <button
            onClick={signOut}
            className="mt-6 inline-flex items-center gap-2 text-sm text-navy hover:text-gold"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-28 pb-24 px-6">
      <Toaster />
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Admin</span>
            <h1 className="mt-2 font-serif text-5xl text-navy">The Custodian's Desk</h1>
            <p className="mt-2 text-sm text-navy/60">Signed in as {userEmail}</p>
          </div>
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 text-sm text-navy/70 hover:text-gold"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>

        {/* Add form */}
        <form
          onSubmit={addCompany}
          className="mt-12 bg-card border border-border rounded-2xl p-8 grid gap-4 md:grid-cols-2"
        >
          <h2 className="md:col-span-2 font-serif text-2xl text-navy flex items-center gap-2">
            <Plus className="h-5 w-5 text-gold" /> Add a new house
          </h2>
          <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
          <Field label="Tag (e.g. Beauty & Cosmetics)" value={form.tag} onChange={(v) => setForm({ ...form, tag: v })} required />
          <Field label="Website URL" type="url" value={form.url} onChange={(v) => setForm({ ...form, url: v })} required />
          <Field label="Thumbnail image URL (optional)" value={form.image_url} onChange={(v) => setForm({ ...form, image_url: v })} />
          <Field label="Sort order" type="number" value={String(form.sort_order)} onChange={(v) => setForm({ ...form, sort_order: Number(v) || 0 })} />
          <div className="md:col-span-2">
            <label className="text-xs uppercase tracking-[0.2em] text-navy/70">Blurb</label>
            <textarea
              value={form.blurb}
              onChange={(e) => setForm({ ...form, blurb: e.target.value })}
              rows={3}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-navy text-cream px-6 py-3 rounded-full text-sm tracking-wide hover:bg-navy-deep transition-all disabled:opacity-60"
            >
              {saving ? "Saving…" : "Add company"}
            </button>
          </div>
        </form>

        {/* Existing list */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-navy">Current houses</h2>
          <div className="mt-6 space-y-3">
            {companies.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between gap-6 bg-card border border-border rounded-xl px-5 py-4"
              >
                <div className="min-w-0">
                  <div className="font-serif text-xl text-navy truncate">{c.name}</div>
                  <div className="text-xs text-navy/55 truncate">{c.tag} · {c.url}</div>
                </div>
                <button
                  onClick={() => remove(c.id)}
                  className="text-navy/50 hover:text-destructive transition-colors"
                  aria-label="Delete"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
            {companies.length === 0 && (
              <p className="text-navy/50 text-sm">No companies yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-navy/70">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}
