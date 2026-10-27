(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "56eb3a9d-19be-41c7-8300-7c52e0975a55", e._sentryDebugIdIdentifier = "sentry-dbid-56eb3a9d-19be-41c7-8300-7c52e0975a55");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $3a442827418ebe87$export$eb2fcfdbd7ba97d4 as t, $542a13ca2fa5b484$export$5b6b19405a83ff9d as n, $72abaeab4d80592f$export$78efe591171d7d45 as r, $bd263d78e9bf3c56$export$f5c9f3c2c4054eec as i, $ea3928288112382f$export$439d29a4e110a164 as a, $f2ff30fde7b014be$export$3ddf2d174ce01153 as o, $fe21c36db05242bb$export$a98f0dcb43a68a25 as s, $fe21c36db05242bb$export$d7b12c4107be0d61 as c, ACCENTS as l, ApiError as u, Button as d, ButtonLink as f, CLOUD_LOCATIONS as p, CLOUD_PROXY_HELP as m, CONFIGURATION_KEY as h, CONFIGURATION_URL as g, CREDENTIAL_STATE as _, Checkbox as v, Chip as y, Disclosure as b, ENTRY_LINKS_HELP as x, ENTRY_LINKS_HINT as S, EmptyState as ee, ErrorText as C, ExternalLink as w, FEED_SCHEDULE_KEY as T, FOLLOW_CREDENTIALS_KEY as E, FOLLOW_INITIAL_RANGE_OPTIONS as D, FOLLOW_SCHEDULE_KEY as O, Fact as k, FactList as te, FieldLabel as ne, Footer as A, Help as j, HintText as re, Input as M, LIBRARY_FOLDER_HELP as ie, LIBRARY_PROCESSING_KEY as ae, Label as oe, LinkButton as se, LoadingDots as ce, M6 as le, MEDIA_PROCESSING_KEY as ue, MEDIA_PROCESSING_URL as de, MEDIA_SOURCE_ICONS as fe, MENU_POPOVER_SURFACE as pe, Note as N, PICK_FOLDER_URL as me, POLICY_COLUMNS as he, POLICY_COVER_NOTE as ge, POLICY_MATRIX as _e, POLICY_SUMMARY as ve, PathLine as ye, PillTabList as be, Progress as xe, Rows as P, SEGMENT as Se, SEGMENTED_TRACK as Ce, SETTINGS_KEY as we, SETTINGS_URL as Te, Section as F, SectionSkeleton as Ee, SegmentedRadioGroup as De, Select as Oe, Select$1 as I, SelectItem as L, SettingsCard as ke, SettingsRow as R, SiteLabel as Ae, SourceLabel as z, SourceMark as je, Stack as B, StatusLabel as V, Switch as H, THUMBNAIL_JOBS_KEY as Me, TextField as Ne, TextFieldContext as Pe, __toESM as Fe, apiGet as U, apiSend as W, appSettingsStore as Ie, boundedPreference as Le, busyProps as G, cardClass as Re, cloudProxySkeleton as ze, cn as Be, confirmModal as Ve, credentialDone as He, credentialsSkeleton as Ue, cx as We, errorMessage as K, fetchConfiguration as Ge, fetchCredentials as Ke, fetchFeedSchedule as qe, fetchFollowSchedule as Je, fetchMediaProcessing as Ye, fetchSettings as Xe, fetchThumbnailJobs as Ze, fmtSize as Qe, indexersSkeleton as $e, javBrowserSkeleton as et, momentText as tt, overlayHost as nt, peachHistory$1 as rt, previewLibraryColor as it, providerIcon as at, queryClient as q, randomId as ot, rememberShape as J, require_jsx_runtime as st, require_react as ct, saveCredential as lt, schedulePollInterval as ut, settingsPath as dt, shellNavigate as ft, sortCx as pt, sourceDefaultCost as mt, useAction as Y, useClientUpdates as ht, useLibraryTints as gt, useMutation as _t, useQuery as X, useRunSchedule as vt, useSaveFollowSchedule as yt, useSaveSettings as bt, useSaveThumbnailMode as xt } from "./peach-app.js";
import { CodeBlock as St } from "./peach-app.code-block-C5xw-gzS.js";
import { FolderField as Ct, FolderFieldLine as wt, FolderRow as Tt, MEDIA_SOURCES as Et, MediaReadPolicy as Dt, MediaReadPolicyHelp as Ot, SourceSelect as kt, isCloudSource as At, sourceMark as jt, useFolderRows as Mt } from "./peach-app.folder-rows-CsnrS785.js";
import { ConnectionStatus as Nt } from "./peach-app.connection-status-B0tSnjj0.js";
import { SourceIcon as Pt } from "./peach-app.source-view-DalWfDkm.js";
// src/react/settings/configuration-panel.ts
var Z = /* @__PURE__ */ Fe(ct(), 1), Ft = "flex flex-col gap-6";
function Q(e) {
	return e ? {
		className: e.active ? `${Ft} ui-board-group-active` : Ft,
		"data-board-group": String(e.index),
		id: e.id,
		role: "tabpanel",
		"aria-labelledby": e.labelledBy
	} : { className: Ft };
}
// src/react/settings/userscript-probe.ts
function It() {
	let e = (0, Z.useRef)(null), [t, n] = (0, Z.useState)(0), [r, i] = (0, Z.useState)("checking");
	return (0, Z.useEffect)(() => {
		let t = ot(), n = !1, r = e.current, a, o = () => {
			n = !0, clearInterval(u), i("missing");
		}, s = () => {
			n || (clearTimeout(a), a = setTimeout(o, 3e3), c());
		}, c = () => e.current?.contentWindow?.postMessage({
			type: "peach-userscript:probe",
			nonce: t
		}, window.location.origin), l = (r) => {
			!n && r.source === e.current?.contentWindow && r.origin === window.location.origin && r.data?.type === "peach-userscript:ready" && r.data.nonce === t && r.data.protocol === 1 && typeof r.data.version == "string" && /^\d{1,5}\.\d{1,5}\.\d{1,5}$/.test(r.data.version) && typeof r.data.paired == "boolean" && (n = !0, clearInterval(u), clearTimeout(a), i({
				version: r.data.version,
				paired: r.data.paired
			}));
		};
		window.addEventListener("message", l);
		let u = setInterval(c, 250);
		return a = setTimeout(o, 15e3), r?.addEventListener("load", s), r?.contentDocument?.readyState === "complete" && r.contentDocument.URL !== "about:blank" && s(), c(), () => {
			clearInterval(u), clearTimeout(a), r?.removeEventListener("load", s), window.removeEventListener("message", l);
		};
	}, [t]), {
		frame: e,
		attempt: t,
		status: r,
		retry: () => {
			r !== "checking" && (i("checking"), n((e) => e + 1));
		}
	};
}
// src/react/settings/userscript-status.tsx
var $ = st();
function Lt(e, t) {
	let n = e.split(".").map(Number), r = t.split(".").map(Number);
	for (let e = 0; e < 3; e++) if (n[e] !== r[e]) return n[e] > r[e];
	return !0;
}
function Rt({ enabled: e, release: t }) {
	let { frame: n, attempt: r, status: i, retry: a } = It(), o = typeof i == "object", s = o && !Lt(i.version, t.minimum_version), c = o && !Lt(i.version, t.version), l = i === "checking" ? "progress" : i === "missing" ? "neutral" : s || c || !i.paired ? "warning" : "success", u = i === "checking" ? "Checking" : i === "missing" ? "Not Detected" : s ? "Update Required" : c ? "Update Available" : i.paired ? "Connected" : "Not Paired", f = i === "checking" ? "checking" : i === "missing" ? "missing" : s ? "required" : c ? "available" : i.paired ? e ? "enabled" : "disabled" : "unpaired";
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("iframe", {
		ref: n,
		title: "Peach Userscript Check",
		hidden: !0,
		src: "/integrations/peach-userscript-bridge"
	}, r), /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-live": "polite",
		"data-userscript-status": "",
		className: Re({
			variant: "raised",
			bordered: "line",
			className: "flex flex-col gap-3"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: "Peach Userscript"
				}), /* @__PURE__ */ (0, $.jsx)(Nt, {
					tone: l,
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `userscript.${f}.status`,
						children: u
					})
				})]
			}),
			o ? /* @__PURE__ */ (0, $.jsxs)("p", {
				"data-copy-key": "userscript.installed.version",
				className: "text-body-regular text-text-secondary",
				children: ["Userscript v", i.version]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: "Browser Add-on"
				}), /* @__PURE__ */ (0, $.jsx)(V, {
					tone: e ? "success" : "neutral",
					children: /* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": `userscript.adding.${e ? "enabled" : "disabled"}`,
						children: e ? "Enabled" : "Disabled"
					})
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				"data-copy-key": `userscript.${f}.message`,
				className: "text-caption-1-regular text-text-secondary",
				children: i === "checking" ? "Checking for the userscript in this browser." : i === "missing" ? "Make sure the script is enabled and up to date. In Chrome, also enable “Allow User Scripts” or Developer Mode in the Tampermonkey extension details and allow access to this Peach site. Refresh the page, then check again." : s ? `Update to v${t.minimum_version} or later.` : c ? `Userscript v${t.version} is available.` : i.paired ? e ? "You can add titles to Peach directly from supported sites." : "Enable browser adding to add titles to Peach directly from supported sites." : "Generate a token, copy the pairing information, then paste and save it in the userscript settings."
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					i === "missing" || s || c ? /* @__PURE__ */ (0, $.jsx)(w, {
						href: t.install_url,
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": `userscript.${i === "missing" ? "install" : "update"}.action`,
							children: s || c ? "Update Userscript" : "Install Peach Userscript"
						})
					}) : null,
					i === "missing" ? /* @__PURE__ */ (0, $.jsx)(w, {
						href: "https://www.tampermonkey.net/faq.php#Q209",
						children: "Tampermonkey Permission Setup"
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(d, {
						variant: "secondary",
						type: "button",
						...G(i === "checking"),
						onClick: a,
						children: "Check Again"
					})
				]
			})
		]
	})] });
}
// src/react/settings/jav-browser-settings.tsx
var zt = "/api/configuration/jav-browser";
function Bt({ receipt: e, refreshKey: t }) {
	let n = X({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => U(zt, e),
		refetchOnMount: "always",
		refetchOnWindowFocus: "always"
	});
	return n.error && !n.data ? /* @__PURE__ */ (0, $.jsx)(C, { children: K(n.error) }) : n.isFetching && !n.data ? /* @__PURE__ */ (0, $.jsx)(Ee, {
		label: "Loading browser add-on settings",
		html: et
	}) : n.data ? /* @__PURE__ */ (0, $.jsx)(Vt, {
		initial: n.data,
		receipt: e
	}) : null;
}
function Vt({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.provider), [o, s] = (0, Z.useState)(""), c = Y();
	(0, Z.useEffect)(() => {
		J("javBrowser", {
			enabled: e.enabled,
			ready: e.providers.some((t) => t.key === e.provider && t.configured && t.target)
		}), r(e), a((t) => e.providers.some((e) => e.key === t) ? t : e.provider), e.enabled || s("");
	}, [e]);
	let l = (e) => {
		c.run(e, (t) => W(zt, {
			action: e,
			provider: i
		}, "POST", t), (n) => {
			let { token: i = "", ...o } = n;
			r(o), a(o.provider), s(i), t(e === "disable" ? "Browser adding disabled" : "Dedicated token generated");
		});
	}, u = n.providers.some((e) => e.key === i && e.configured && e.target);
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Add JAV from Browser",
		children: [/* @__PURE__ */ (0, $.jsxs)(B, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, $.jsx)(Rt, {
					enabled: n.enabled,
					release: n.userscript
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(ne, { children: "Download Service for Browser Adding" }), /* @__PURE__ */ (0, $.jsx)(I, {
						"aria-label": "Download Service for Browser Adding",
						selectedKey: i || null,
						placeholder: "No services available",
						onSelectionChange: (e) => {
							e !== null && a(String(e));
						},
						isDisabled: !n.providers.length || !!c.busy,
						children: n.providers.map((e) => /* @__PURE__ */ (0, $.jsx)(L, {
							id: e.key,
							textValue: e.label,
							children: /* @__PURE__ */ (0, $.jsx)(z, {
								source: e.key,
								label: e.label
							})
						}, e.key))
					})]
				}),
				u ? null : /* @__PURE__ */ (0, $.jsx)(j, { children: "Add a cloud drive that supports cloud downloads to a library, then configure its account and destination folder." }),
				n.problems?.map((e) => /* @__PURE__ */ (0, $.jsx)(j, { children: e }, e)),
				n.enabled && n.active_provider && !n.providers.some((e) => e.key === n.active_provider) ? /* @__PURE__ */ (0, $.jsx)(j, { children: "The enabled download service is unavailable. Choose a service and update the token." }) : null,
				/* @__PURE__ */ (0, $.jsx)(M, {
					label: "Peach URL",
					value: window.location.origin,
					isReadOnly: !0,
					autoComplete: "off"
				}),
				o ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)(M, {
						label: "Dedicated Browser-Add Token",
						type: "password",
						value: o,
						isReadOnly: !0,
						autoComplete: "new-password"
					}),
					/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(d, {
						variant: "secondary",
						type: "button",
						onClick: () => {
							c.run("copy", async () => navigator.clipboard.writeText(JSON.stringify({
								peach_pairing: 1,
								base: window.location.origin,
								token: o
							})), () => t("Pairing information copied"));
						},
						...G(c.busy === "copy"),
						children: "Copy Pairing Information"
					}) }),
					/* @__PURE__ */ (0, $.jsx)(j, { children: "Paste the pairing information into “Peach URL” in the userscript settings to fill in the URL and token." })
				] }) : null
			]
		}), c.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: c.error }) : null] }), /* @__PURE__ */ (0, $.jsxs)(A, { children: [n.enabled ? /* @__PURE__ */ (0, $.jsx)(d, {
			variant: "secondary",
			type: "button",
			disabled: !!c.busy,
			onClick: () => l("disable"),
			children: "OffBrowser Add-on"
		}) : null, /* @__PURE__ */ (0, $.jsx)(d, {
			type: "button",
			disabled: !n.available || !u || !!c.busy,
			onClick: () => l(n.enabled ? "rotate" : "enable"),
			...G(c.busy === "enable" || c.busy === "rotate"),
			children: n.enabled ? "Update Service and Token" : "Enable and Generate Token"
		})] })]
	});
}
// src/react/settings/download-settings.tsx
var Ht = "/api/configuration/downloads", Ut = "/api/configuration/downloads/check", Wt = "/api/configuration/downloads/folder", Gt = "/api/configuration/downloads/pikpak/login", Kt = "/api/configuration/downloads/pikpak/logout", qt = "/api/configuration/downloads/pikpak/browser-login", Jt = 2e3, Yt = at("pikpak");
function Xt({ initial: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		...Q(n),
		children: [r, e ? /* @__PURE__ */ (0, $.jsx)(Zt, {
			initial: e,
			receipt: t
		}) : null]
	});
}
function Zt({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		r((t) => ({
			...t,
			media_sources: e.media_sources,
			pikpak_roots: e.pikpak_roots
		}));
	}, [e.media_sources, e.pikpak_roots]);
	let o = n.media_sources ?? [], s = o.includes("pikpak"), c = o.some((e) => p.includes(e)), l = s && (n.pikpak.logged_in || !!i.trim());
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		c ? /* @__PURE__ */ (0, $.jsx)(Qt, {
			state: n,
			settle: r,
			receipt: t,
			pikpakAccount: l
		}) : null,
		s ? /* @__PURE__ */ (0, $.jsx)(tn, {
			state: n,
			settle: r,
			receipt: t,
			username: i,
			setUsername: a
		}) : null,
		/* @__PURE__ */ (0, $.jsx)(Bt, {
			receipt: t,
			refreshKey: JSON.stringify([
				n.media_sources,
				n.config,
				n.token_set,
				n.pikpak.logged_in
			])
		})
	] });
}
function Qt({ state: e, settle: t, receipt: n, pikpakAccount: r }) {
	let [i, a] = (0, Z.useState)(e.config), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(String(e.config.wait_hours)), [u, f] = (0, Z.useState)(null), [p, m] = (0, Z.useState)(""), [h, g] = (0, Z.useState)($t), [_, v] = (0, Z.useState)(""), [y, b] = (0, Z.useState)(!1), x = Y(), S = e.media_sources ?? [], ee = S.includes("115"), w = S.includes("pikpak"), T = (e) => i.targets[e] ?? "", E = (e, t) => a({
		...i,
		targets: {
			...i.targets,
			[e]: t
		}
	}), D = ee && !(!h.target || h.target.exists || T("115") !== h.target.path), O = (e, t, n = "") => {
		let r = t.target ? e.suggested_target : null, i = !!(r && n && r.path === n), o = t.root ? e.suggested_pikpak_root : "";
		a((n) => ({
			...n,
			clouddrive_address: t.address && e.address ? e.address : n.clouddrive_address,
			targets: r && !i ? {
				...n.targets,
				115: r.path
			} : n.targets,
			pikpak_root: o || n.pikpak_root
		})), f(e), m(t.address ? e.address : ""), g({
			target: r,
			root: o,
			saved: i
		}), b(!1), v("");
	};
	return (0, Z.useEffect)(() => {
		if (!e.available || !e.config.clouddrive_address || !e.token_set) return;
		let t = {
			address: !1,
			target: !e.config.targets[115],
			root: !e.config.pikpak_root
		};
		x.run("auto", (e) => U(Ut, e), (e) => O(e, t), (e) => v(K(e)));
	}, []), /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Cloud Downloads",
		onSubmit: (e) => {
			if (e.preventDefault(), D) {
				b(!0);
				return;
			}
			let u = !T("115").trim(), d = {
				...i,
				wait_hours: c,
				token: o,
				pikpak_account: r
			};
			x.run("save", (e) => W(Ht, d, "POST", e), (e) => {
				let { report: r, ...i } = e;
				t(i), a(i.config), l(String(i.config.wait_hours)), s(""), r ? O(r, {
					address: !i.config.clouddrive_address,
					target: u,
					root: !i.config.pikpak_root
				}, i.config.targets[115] ?? "") : (f(null), m(""), g($t), b(!1), v("")), n("Settings saved");
			}, (e) => v(K(e)));
		},
		children: [
			e.problems?.length ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "Cloud Download Settings Need Attention",
				children: e.problems.join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, $.jsxs)(B, { children: [
				/* @__PURE__ */ (0, $.jsx)(M, {
					label: "CloudDrive2 URL",
					placeholder: "Leave blank to detect automatically",
					autoComplete: "off",
					maxLength: 200,
					value: i.clouddrive_address,
					isDisabled: !e.available,
					onChange: (e) => a({
						...i,
						clouddrive_address: e
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(M, {
					label: "CloudDrive2 API Token",
					type: "password",
					autoComplete: "off",
					maxLength: 400,
					placeholder: e.token_set ? "Saved; leave blank to keep it" : "Generate in CloudDrive2 Settings → API Token",
					hint: "Requires offline task permission.",
					value: o,
					isDisabled: !e.available,
					onChange: s
				}),
				ee ? /* @__PURE__ */ (0, $.jsx)(M, {
					label: /* @__PURE__ */ (0, $.jsx)(z, {
						source: "115",
						label: "115 Destination Folder"
					}),
					placeholder: "Leave blank to fill from library folders",
					autoComplete: "off",
					maxLength: 300,
					validationBehavior: "aria",
					isInvalid: D,
					hint: D ? y ? "Create this folder first or enter an existing folder." : "This folder does not exist." : "Must be within a cloud path prefix used for automatic importing.",
					value: T("115"),
					isDisabled: !e.available,
					onChange: (e) => E("115", e)
				}) : null,
				w ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(M, {
					label: /* @__PURE__ */ (0, $.jsx)(z, {
						source: "pikpak",
						label: "PikPak Destination Folder"
					}),
					placeholder: "Cloud path beginning with /",
					autoComplete: "off",
					maxLength: 300,
					hint: "The folder must already exist.",
					value: T("pikpak"),
					isDisabled: !e.available,
					onChange: (e) => E("pikpak", e)
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(ne, { children: /* @__PURE__ */ (0, $.jsx)(z, {
						source: "pikpak",
						label: "Media Folder for the PikPak Root"
					}) }), e.pikpak_roots.length ? /* @__PURE__ */ (0, $.jsx)(I, {
						"aria-label": "Media Folder for the PikPak Root",
						selectedKey: i.pikpak_root || null,
						isDisabled: !e.available,
						placeholder: "Selected from library folders during the check",
						onSelectionChange: (e) => a({
							...i,
							pikpak_root: e === null ? "" : String(e)
						}),
						children: e.pikpak_roots.map((e) => /* @__PURE__ */ (0, $.jsx)(L, {
							id: e,
							children: e
						}, e))
					}) : /* @__PURE__ */ (0, $.jsx)(j, { children: "First add a mounted PikPak folder under Libraries & Importing." })]
				})] }) : null,
				/* @__PURE__ */ (0, $.jsx)(M, {
					label: "Maximum Wait (Hours)",
					type: "number",
					inputMode: "numeric",
					autoComplete: "off",
					hint: `Timed-out tasks are marked stalled. Enter 1–${e.max_wait_hours} hours.`,
					value: c,
					isDisabled: !e.available,
					onChange: l
				})
			] }),
			x.busy === "auto" ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(ce, { label: "Checking CloudDrive2" })
			}) : null,
			u ? /* @__PURE__ */ (0, $.jsx)(en, {
				report: u,
				detected: p,
				suggested: h,
				create: e.available ? (e) => {
					let t = {
						clouddrive_address: i.clouddrive_address,
						token: o,
						path: e,
						pikpak_root: i.pikpak_root,
						pikpak_account: r
					};
					x.run("folder", (e) => W(Wt, t, "POST", e), (t) => {
						f(t), g((t) => ({
							...t,
							target: {
								path: e,
								exists: !0
							}
						})), b(!1), v(""), n("Folder created");
					}, (e) => v(K(e)));
				} : void 0,
				creating: x.busy === "folder"
			}) : null,
			_ || x.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(C, { children: _ || x.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(A, {
				status: e.available ? void 0 : "Cloud downloads are available only on devices allowed to modify the database.",
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "secondary",
					onClick: () => {
						let e = {
							address: !i.clouddrive_address.trim(),
							target: !T("115").trim(),
							root: !i.pikpak_root
						}, t = {
							clouddrive_address: i.clouddrive_address,
							token: o,
							target: T("115"),
							pikpak_root: i.pikpak_root,
							pikpak_account: r
						};
						x.run("check", (e) => W(Ut, t, "POST", e), (t) => O(t, e), (e) => v(K(e)));
					},
					disabled: !e.available,
					...G(x.busy === "check"),
					children: "Check Connection"
				}), /* @__PURE__ */ (0, $.jsx)(d, {
					type: "submit",
					disabled: !e.available,
					...G(x.busy === "save"),
					children: "Save settings"
				})]
			})
		]
	});
}
var $t = {
	target: null,
	root: "",
	saved: !1
};
function en({ report: e, detected: t, suggested: n, create: r, creating: i }) {
	let a = n.target, o = !!(t || a || n.root || e.permissions.length || e.folder || e.quota);
	return !o && !e.problems.length ? null : /* @__PURE__ */ (0, $.jsxs)(B, {
		divided: !0,
		children: [o ? /* @__PURE__ */ (0, $.jsxs)(te, { children: [
			t ? /* @__PURE__ */ (0, $.jsx)(k, {
				term: "CloudDrive2 URL",
				children: `Detected ${t}; save settings to apply`
			}) : null,
			a?.exists ? /* @__PURE__ */ (0, $.jsx)(k, {
				term: /* @__PURE__ */ (0, $.jsx)(z, {
					source: "115",
					label: "115 Destination Folder"
				}),
				children: n.saved ? `Filled from library folders: ${a.path}` : `Filled from library folders: ${a.path}; save settings to apply`
			}) : null,
			a && !a.exists ? /* @__PURE__ */ (0, $.jsxs)(k, {
				term: /* @__PURE__ */ (0, $.jsx)(z, {
					source: "115",
					label: "115 Destination Folder"
				}),
				children: [`${a.path} does not exist`, r ? /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "secondary",
					size: "small",
					onClick: () => r(a.path),
					...G(i),
					children: "Create This Folder"
				}) : null]
			}) : null,
			n.root ? /* @__PURE__ */ (0, $.jsx)(k, {
				term: /* @__PURE__ */ (0, $.jsx)(z, {
					source: "pikpak",
					label: "PikPak Root Folder"
				}),
				children: `Filled from library folders: ${n.root}; save settings to apply`
			}) : null,
			e.permissions.length ? /* @__PURE__ */ (0, $.jsx)(k, {
				term: "Offline Permissions",
				children: e.missing.length ? e.missing.map((e) => /* @__PURE__ */ (0, $.jsx)(y, {
					variant: "caption",
					color: "yellow",
					children: `Missing ${e}`
				}, e)) : /* @__PURE__ */ (0, $.jsx)(y, {
					variant: "caption",
					color: "lime",
					children: "All Granted"
				})
			}) : null,
			e.folder ? /* @__PURE__ */ (0, $.jsx)(k, {
				term: "Destination Folder",
				children: e.folder.can_offline ? `${e.folder.path} supports offline downloads` : `${e.folder.path} does not support offline downloads`
			}) : null,
			e.quota ? /* @__PURE__ */ (0, $.jsx)(k, {
				term: /* @__PURE__ */ (0, $.jsx)(z, {
					source: "115",
					label: "115 Offline Quota"
				}),
				children: `Remaining this month: ${e.quota.left} of ${e.quota.total}`
			}) : null
		] }) : null, e.problems.map((e) => /* @__PURE__ */ (0, $.jsx)(C, { children: e }, e))]
	});
}
function tn({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
	let [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(!1), [l, u] = (0, Z.useState)(""), [f, p] = (0, Z.useState)(""), [m, h] = (0, Z.useState)(""), g = Y(), _ = e.pikpak, y = e.pikpak_browser, b = y.state === "waiting";
	(0, Z.useEffect)(() => {
		if (!b) return;
		let e = new AbortController(), r, i = async () => {
			try {
				let r = await U(qt, e.signal);
				if (e.signal.aborted || (t(r), r.pikpak_browser.state === "done" ? n("Signed in to PikPak") : r.pikpak_browser.state !== "waiting" && h(r.pikpak_browser.message), r.pikpak_browser.state !== "waiting")) return;
			} catch (t) {
				if (e.signal.aborted) return;
				p(K(t));
			}
			r = setTimeout(i, Jt);
		};
		return r = setTimeout(i, Jt), () => {
			e.abort(), clearTimeout(r);
		};
	}, [b]);
	let x = () => {
		h(""), g.run("browser", (e) => W(qt, {}, "POST", e), (e) => {
			t(e), p("");
		}, (e) => p(K(e)));
	}, S = () => {
		g.run("cancel", (e) => W(`${qt}/cancel`, {}, "POST", e), (e) => {
			t(e), p(""), h(e.pikpak_browser.message);
		}, (e) => p(K(e)));
	}, ee = (e) => {
		if (e.preventDefault(), _.logged_in) return;
		let i = {
			username: r,
			password: a,
			remember: s
		};
		g.run("login", (e) => W(Gt, i, "POST", e), (e) => {
			t(e.settings), p(""), e.ok ? (u(""), o(""), n("Signed in to PikPak")) : u(e.captcha_url ?? "");
		}, (e) => p(K(e)));
	}, T = () => {
		g.run("logout", (e) => W(Kt, {}, "POST", e), (e) => {
			t(e), p(""), n("Signed out of PikPak");
		}, (e) => p(K(e)));
	}, E = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(M, {
			label: "Account",
			placeholder: "Email or phone number",
			autoComplete: "username",
			maxLength: 200,
			value: r,
			isDisabled: !e.available,
			onChange: i
		}),
		/* @__PURE__ */ (0, $.jsx)(M, {
			label: "Password",
			type: "password",
			autoComplete: "current-password",
			maxLength: 200,
			value: a,
			isDisabled: !e.available,
			onChange: o
		}),
		/* @__PURE__ */ (0, $.jsx)(v, {
			isSelected: s,
			isDisabled: !e.available,
			onChange: c,
			children: "Save password and sign in again automatically when the session expires"
		}),
		l ? /* @__PURE__ */ (0, $.jsx)(N, {
			tone: "warning",
			title: "Verification Required",
			extra: /* @__PURE__ */ (0, $.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, $.jsx)(w, {
					href: l,
					children: "Open PikPak Verification Page"
				})
			}),
			children: "Complete verification in your browser, then return here and select Sign In again."
		}) : null
	] }), D = /* @__PURE__ */ (0, $.jsx)(d, {
		type: "submit",
		variant: "primary",
		disabled: !e.available || b,
		...G(g.busy === "login"),
		children: "Sign In"
	}), O = y.state === "timeout" || y.state === "failed";
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "PikPak Account",
		icon: /* @__PURE__ */ (0, $.jsx)(Yt, {}),
		onSubmit: ee,
		aside: /* @__PURE__ */ (0, $.jsx)(V, {
			tone: _.logged_in ? "success" : b ? "progress" : O ? "error" : "neutral",
			children: _.logged_in ? "Signed In" : b ? "Waiting for Sign-in" : O ? "Sign-in Incomplete" : "Signed Out"
		}),
		children: [
			_.logged_in ? /* @__PURE__ */ (0, $.jsxs)(te, { children: [/* @__PURE__ */ (0, $.jsx)(k, {
				term: "Account",
				children: _.username || "Signed In"
			}), _.method === "browser" ? /* @__PURE__ */ (0, $.jsx)(k, {
				term: "Sign-in Method",
				children: "Browser sign-in, renewed by Peach"
			}) : /* @__PURE__ */ (0, $.jsx)(k, {
				term: "Password",
				children: _.remember ? "Saved; signs in again automatically when the session expires" : "Not saved; return here to sign in again when the session expires"
			})] }) : /* @__PURE__ */ (0, $.jsxs)(B, { children: [m ? O ? /* @__PURE__ */ (0, $.jsx)(C, { children: m }) : /* @__PURE__ */ (0, $.jsx)(j, {
				role: "status",
				children: m
			}) : null, E] }),
			f || g.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(C, { children: f || g.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(A, {
				status: !_.logged_in && b ? /* @__PURE__ */ (0, $.jsx)(ce, { label: y.message || "Waiting for you to sign in to PikPak in the browser window" }) : null,
				children: _.logged_in ? /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "secondary",
					onClick: T,
					disabled: !e.available,
					...G(g.busy === "logout"),
					children: "Sign Out"
				}) : /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [y.available ? b ? /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "secondary",
					type: "button",
					onClick: S,
					...G(g.busy === "cancel"),
					children: "Cancel"
				}) : /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "secondary",
					type: "button",
					onClick: x,
					disabled: !e.available,
					...G(g.busy === "browser"),
					children: "Sign In with Browser"
				}) : null, D] })
			})
		]
	});
}
// src/react/settings/library-sharing-settings.tsx
function nn({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(null), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(!1), u = (0, Z.useMemo)(() => i ? JSON.stringify(i.data, null, 2) : "", [i]), f = Y(), p = (e) => void f.run("save", (t) => W("/api/configuration/library-sharing", {
		enabled: e,
		schema: n.schema,
		consent: c,
		preview_token: i?.token
	}, "POST", t), (e) => {
		r(e), a(null), l(!1), s(!1), t("Library and preference upload options saved");
	}), m = () => {
		let e = URL.createObjectURL(new Blob([u], { type: "application/json" })), t = document.createElement("a");
		t.href = e, t.download = "peach-library-taste-preview.json", document.body.append(t);
		try {
			t.click();
		} finally {
			t.remove(), setTimeout(() => URL.revokeObjectURL(e), 1e3);
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
			label: "Upload Library and Preference Details",
			description: n.notice,
			children: /* @__PURE__ */ (0, $.jsx)(H, {
				"aria-label": "Upload Library and Preference Details",
				isSelected: n.enabled,
				onChange: (e) => e ? s(!0) : p(!1),
				...G(f.busy === "save")
			})
		}) }),
		n.available ? null : /* @__PURE__ */ (0, $.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(V, { children: "Upload Service Not Configured" })
			})
		}),
		n.enabled && n.last_attempt?.status === "failed" ? /* @__PURE__ */ (0, $.jsxs)(B, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(V, {
					tone: n.last_attempt.attempted ? "error" : "warning",
					children: n.last_attempt.attempted ? "Upload Failed" : "Waiting to Retry"
				})
			}), /* @__PURE__ */ (0, $.jsx)(C, { children: n.last_attempt.attempted ? "Library and preference upload failed and will not be retried this week." : "Library and preference upload did not complete and will be prepared again automatically." })]
		}) : null,
		n.enabled && n.last_attempt?.status === "waiting-data" ? /* @__PURE__ */ (0, $.jsxs)(B, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(V, { children: "Waiting for Data" })
			}), /* @__PURE__ */ (0, $.jsx)(j, { children: "Waiting for library or preference data that can be analyzed." })]
		}) : null,
		n.enabled && n.last_attempt?.status === "unknown" ? /* @__PURE__ */ (0, $.jsxs)(B, {
			divided: !0,
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsx)(V, {
					tone: "warning",
					children: "Result Unavailable"
				})
			}), /* @__PURE__ */ (0, $.jsx)(j, { children: "No upload result was received. It will not be sent again this week." })]
		}) : null,
		i ? /* @__PURE__ */ (0, $.jsxs)(B, {
			divided: !0,
			children: [
				/* @__PURE__ */ (0, $.jsxs)(j, { children: [
					"This preview summarizes ",
					i.data.library.length,
					" coded titles and ",
					i.data.coverage.uncoded_items,
					" uncoded library items, totaling about ",
					(i.bytes / 1024).toFixed(1),
					" KiB. It does not include personal data such as accounts, devices, file paths, or browser history."
				] }),
				/* @__PURE__ */ (0, $.jsx)(b, {
					summary: "Upload Data Preview",
					defaultOpen: !0,
					children: /* @__PURE__ */ (0, $.jsx)(St, {
						code: u,
						language: "json",
						label: "Library and Preference Upload Preview",
						maxCharacters: 24e3
					})
				}),
				u.length > 24e3 ? /* @__PURE__ */ (0, $.jsx)(j, { children: "Showing the first 24,000 characters. Download to view the complete content." }) : null,
				/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "secondary",
					onClick: m,
					children: "Download Full Preview"
				}),
				n.enabled ? null : /* @__PURE__ */ (0, $.jsx)(v, {
					isSelected: c,
					onChange: l,
					children: "I reviewed the preview and agree to upload library and preference details"
				})
			]
		}) : null,
		f.error ? /* @__PURE__ */ (0, $.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(C, { children: f.error })
		}) : null,
		/* @__PURE__ */ (0, $.jsxs)(A, { children: [
			o && !n.enabled ? /* @__PURE__ */ (0, $.jsx)(d, {
				variant: "secondary",
				onClick: () => {
					s(!1), a(null), l(!1);
				},
				children: "Cancel"
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(d, {
				variant: "secondary",
				onClick: () => {
					s(!0), f.run("preview", (e) => U("/api/configuration/library-sharing/preview", e), (e) => {
						a(e), l(!1);
					});
				},
				...G(f.busy === "preview"),
				children: "Preview Upload"
			}),
			!n.enabled && i ? /* @__PURE__ */ (0, $.jsx)(d, {
				variant: "primary",
				disabled: !c,
				onClick: () => p(!0),
				...G(f.busy === "save"),
				children: "Agree and Enable Upload"
			}) : null
		] })
	] });
}
// src/react/settings/remote-reporting-settings.tsx
function rn({ value: e, onChange: t, busy: n = !1 }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
		label: "Send Version Statistics and Error Diagnostics (Recommended)",
		description: "Uploads the version, system information, error type, code location, and occurrence count.",
		children: /* @__PURE__ */ (0, $.jsx)(H, {
			"aria-label": "Send Version Statistics and Error Diagnostics (Recommended)",
			isSelected: e.usage && e.errors,
			onChange: (n) => t({
				...e,
				usage: n,
				errors: n
			}),
			...G(n)
		})
	}) }), e.available ? null : /* @__PURE__ */ (0, $.jsx)(B, {
		divided: !0,
		children: /* @__PURE__ */ (0, $.jsx)("span", {
			className: "self-start",
			children: /* @__PURE__ */ (0, $.jsx)(V, { children: "Upload Service Not Configured" })
		})
	})] });
}
function an({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), i = Y();
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(rn, {
		value: n,
		busy: i.busy === "save",
		onChange: (e) => {
			i.run("save", (t) => W("/api/configuration/remote-reporting", {
				usage: e.usage,
				errors: e.errors
			}, "POST", t), (e) => {
				r(e), t("Diagnostic options saved");
			});
		}
	}), i.error ? /* @__PURE__ */ (0, $.jsx)(B, {
		divided: !0,
		children: /* @__PURE__ */ (0, $.jsx)(C, { children: i.error })
	}) : null] });
}
// src/react/settings/storage-settings.tsx
var on = "/api/configuration/storage", sn = 1500, cn = 864e5, ln = (e) => e instanceof u && e.body?.errors?.target || K(e);
function un(e) {
	if (e.free_bytes === null || e.total_bytes === null) return "Unavailable";
	let t = `${Qe(e.free_bytes)} available of ${Qe(e.total_bytes)}`;
	return e.system_drive ? `${t} (system drive)` : t;
}
function dn({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(""), o = Y(), s = n.job.state !== "idle", c = (0, Z.useRef)(s);
	(0, Z.useEffect)(() => {
		if (!s) return;
		let e = new AbortController(), t = setTimeout(() => {
			U(on, e.signal).then(r, () => {
				e.signal.aborted || r((e) => ({ ...e }));
			});
		}, sn);
		return () => {
			e.abort(), clearTimeout(t);
		};
	}, [n]), (0, Z.useEffect)(() => {
		s ? c.current = !0 : c.current && (c.current = !1, n.job.error || t(n.job.message || "Storage usage calculated"));
	}, [s]);
	let l = () => void o.run("measure", (e) => W(`${on}/measure`, {}, "POST", e), r), u = (e) => void Ve({
		title: `Clean ${e.label}`,
		body: `This will delete ${Qe(e.reclaimable)} of ${e.label} — ${e.description}.`,
		confirmLabel: `Clean ${e.label}`,
		danger: e.key === "backups",
		onConfirm: async () => r(await W(`${on}/clean`, { category: e.key }))
	}), f = () => void o.run("relocate", async (e) => {
		let t = (await W(me, { initial: n.data_root }, "POST", e)).path;
		if (!t) return;
		let r = n.usage ? Qe(n.usage.total_bytes) : "";
		await Ve({
			title: "Move Data Folder",
			body: `Move ${r} of data from ${n.data_root} to ${t}. Peach will exit during the move and reopen automatically when complete. Data in the original location will be deleted after the new copy is verified.`,
			confirmLabel: "Move Data Folder",
			onConfirm: async () => {
				try {
					a((await W(`${on}/relocate`, { target: t })).message);
				} catch (e) {
					throw Error(ln(e));
				}
			}
		});
	}, () => void 0), p = n.usage, m = n.relocation.last, h = m && (m.state === "error" || (m.notes?.length ?? 0) > 0 || Date.now() - m.finished_at * 1e3 < cn), g = i || (n.job.state === "measuring" ? "Calculating storage usage…" : n.job.state === "cleaning" ? "Cleaning…" : p ? `Total: ${Qe(p.total_bytes)} — ${p.total_files.toLocaleString()} files` : ""), _ = s || !!i;
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		id: "storageSettings",
		title: "Storage",
		children: [
			/* @__PURE__ */ (0, $.jsxs)(te, { children: [/* @__PURE__ */ (0, $.jsx)(k, {
				term: "Data Folder",
				children: /* @__PURE__ */ (0, $.jsx)(ye, {
					path: n.data_root,
					className: "text-body-regular text-text-primary",
					onRevealed: t
				})
			}), /* @__PURE__ */ (0, $.jsx)(k, {
				term: "Drive",
				children: un(n)
			})] }),
			p ? /* @__PURE__ */ (0, $.jsx)(P, { children: p.categories.map((e) => /* @__PURE__ */ (0, $.jsx)(R, {
				label: e.label,
				description: e.cleanable && e.description ? e.description : void 0,
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex shrink-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-regular text-text-secondary tabular-nums",
						children: Qe(e.bytes)
					}), e.cleanable && e.reclaimable > 0 ? (() => {
						let t = n.job.state === "cleaning" && n.job.category === e.key;
						return /* @__PURE__ */ (0, $.jsxs)(d, {
							variant: "secondary",
							disabled: _ && !t,
							...G(t),
							onClick: () => u(e),
							children: ["Clean  ", Qe(e.reclaimable)]
						});
					})() : null]
				})
			}, e.key)) }) : /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(j, { children: "Calculate usage by category, then clean caches and old backups." })
			}),
			!n.relocation.available || n.job.error || o.error || h ? /* @__PURE__ */ (0, $.jsxs)(B, {
				divided: !0,
				children: [
					n.relocation.available ? null : /* @__PURE__ */ (0, $.jsx)(j, { children: n.relocation.message }),
					n.job.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: n.job.message }) : null,
					o.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: o.error }) : null,
					h && m ? m.state === "error" ? /* @__PURE__ */ (0, $.jsx)(C, { children: m.message }) : /* @__PURE__ */ (0, $.jsx)(j, { children: [m.message, ...m.notes ?? []].join("; ") }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(A, {
				status: g ? /* @__PURE__ */ (0, $.jsx)("p", {
					role: i ? "status" : void 0,
					children: g
				}) : null,
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "secondary",
					disabled: _ || !n.relocation.available || !p,
					onClick: f,
					...G(o.busy === "relocate"),
					children: "Change Location"
				}), /* @__PURE__ */ (0, $.jsx)(d, {
					disabled: !!i || n.job.state === "cleaning",
					onClick: l,
					...G(o.busy === "measure" || n.job.state === "measuring"),
					children: p ? "Recalculate" : "Calculate Usage"
				})]
			})
		]
	});
}
// src/react/settings/maintenance-settings.tsx
var fn = [
	["6", "Every 6 hours"],
	["24", "Daily"],
	["168", "Weekly"]
];
function pn({ data: e, receipt: t, reopenTutorial: n, panel: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		...Q(r),
		children: [
			e.storage ? /* @__PURE__ */ (0, $.jsx)(dn, {
				initial: e.storage,
				receipt: t
			}) : null,
			e.remote_reporting || e.library_sharing ? /* @__PURE__ */ (0, $.jsxs)(F, {
				id: "librarySharing",
				title: "Data Upload",
				children: [e.remote_reporting ? /* @__PURE__ */ (0, $.jsx)(an, {
					initial: e.remote_reporting,
					receipt: t
				}) : null, e.library_sharing ? /* @__PURE__ */ (0, $.jsx)("div", {
					className: "border-t border-separator-border",
					children: /* @__PURE__ */ (0, $.jsx)(nn, {
						initial: e.library_sharing,
						receipt: t
					})
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(gn, { facts: e.facts }),
			/* @__PURE__ */ (0, $.jsx)(mn, {
				receipt: t,
				reopenTutorial: n
			}),
			e.uninstall ? /* @__PURE__ */ (0, $.jsx)(_n, {
				uninstall: e.uninstall,
				receipt: t
			}) : null
		]
	});
}
function mn({ receipt: e, reopenTutorial: t }) {
	let n = Y();
	return /* @__PURE__ */ (0, $.jsx)("section", {
		"aria-label": "Setup Guide",
		className: "w-full",
		children: /* @__PURE__ */ (0, $.jsxs)(ke, { children: [/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
			label: "Setup Guide",
			children: /* @__PURE__ */ (0, $.jsx)(d, {
				variant: "secondary",
				onClick: () => void n.run("reopen", () => t(), () => e("Setup guide reopened")),
				...G(n.busy === "reopen"),
				children: "Reopen Guide"
			})
		}) }), n.error ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(C, { children: n.error }) }) : null] })
	});
}
function hn({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.mode), [i, a] = (0, Z.useState)(e.interval_hours), o = Y(e.error), s = (r) => {
		r.preventDefault(), e.available && o.run("save", (e) => W("/api/configuration/automatic-updates", {
			mode: n,
			interval_hours: i
		}, "POST", e), () => t("Settings saved"));
	}, c = e.available ? e.download_available ? "When the download completes, confirm here to restart and install." : void 0 : "Automatic updates require a service managed by the tray app.";
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		id: "automaticUpdates",
		title: "Automatic Updates",
		onSubmit: s,
		children: [
			/* @__PURE__ */ (0, $.jsxs)(P, { children: [
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Automatically Check for New Versions",
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": "Automatically Check for New Versions",
						isSelected: n !== "off",
						isDisabled: !e.available,
						onChange: (e) => r(e ? "check" : "off")
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Automatically Download Updates",
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": "Automatically Download Updates",
						isSelected: n === "download",
						isDisabled: !e.available || !e.download_available || n === "off",
						onChange: (e) => r(e ? "download" : "check")
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Check Frequency",
					description: c,
					children: /* @__PURE__ */ (0, $.jsx)(I, {
						"aria-label": "Check Frequency",
						selectedKey: String(i),
						isDisabled: !e.available,
						onSelectionChange: (e) => {
							e !== null && a(Number(e));
						},
						children: fn.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(L, {
							id: e,
							children: t
						}, e))
					})
				})
			] }),
			o.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(C, { children: o.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(A, { children: /* @__PURE__ */ (0, $.jsx)(d, {
				type: "submit",
				disabled: !e.available,
				...G(o.busy === "save"),
				children: "Save settings"
			}) })
		]
	});
}
function gn({ facts: e }) {
	return /* @__PURE__ */ (0, $.jsx)(F, {
		title: "Runtime Information",
		children: /* @__PURE__ */ (0, $.jsx)(te, { children: e.map((e) => /* @__PURE__ */ (0, $.jsxs)(k, {
			term: e.term,
			children: [e.value, e.download_url ? /* @__PURE__ */ (0, $.jsx)(w, {
				href: e.download_url,
				children: e.download_label
			}) : null]
		}, e.term)) })
	});
}
function _n({ uninstall: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(!1), [i, a] = (0, Z.useState)(""), o = () => void Ve({
		title: "Uninstall Peach",
		danger: !0,
		body: n ? "Peach will exit and remove the app, startup entry, desktop shortcut, settings, local database, watch history, credentials, and cache. Original media files will be kept." : "Peach will exit and remove the app, startup entry, and desktop shortcut. Settings, the local database, watch history, and cache will be kept.",
		confirmLabel: "Uninstall Peach",
		onConfirm: async () => {
			let e = await W("/api/configuration/uninstall", {
				delete_data: n,
				confirmation: "卸载 Peach"
			});
			a(e.message);
		}
	}), s = i || e.message, c = [.../* @__PURE__ */ new Set([e.data_root, ...e.directories])];
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		id: "uninstallPeach",
		title: "Uninstall Peach",
		children: [
			e.available ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(j, { children: "Uninstalling removes Peach itself but keeps the original media files." }) }) : null,
			/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
				label: "Complete Uninstall",
				description: "Also delete settings, the local database, watch history, credentials, and cache",
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": "Complete Uninstall",
					isSelected: n,
					isDisabled: !e.full_available || !!i,
					onChange: r
				})
			}) }),
			/* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(b, {
					summary: "Data Folder",
					children: c.map((e) => /* @__PURE__ */ (0, $.jsx)(ye, {
						path: e,
						className: "text-body-2-regular text-text-secondary",
						onRevealed: t
					}, e))
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(A, {
				status: s ? /* @__PURE__ */ (0, $.jsx)("p", {
					role: i ? "status" : void 0,
					children: s
				}) : null,
				children: /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "danger",
					disabled: !e.available || !!i,
					onClick: o,
					children: "Uninstall Peach"
				})
			})
		]
	});
}
// src/react/settings/release-updates.tsx
var vn = /* @__PURE__ */ new Set([
	"downloading",
	"verifying",
	"extracting",
	"preparing",
	"restarting",
	"installing"
]), yn = [
	65,
	75,
	90
], bn = 120;
function xn({ initial: e, initialJob: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(t || {
		state: "idle",
		progress: 0
	}), [o, s] = (0, Z.useState)(""), c = Y(), l = (0, Z.useRef)(!1), u = (0, Z.useRef)(!0), f = vn.has(i.state);
	(0, Z.useEffect)(() => (u.current = !0, () => {
		u.current = !1;
	}), []);
	let p = async () => {
		let e = await W("/api/configuration/update-restart", {});
		u.current && a(e);
	}, m = () => void Ve({
		title: "Update Ready",
		body: `Peach ${i.version || ""} will be installed after Peach restarts.`,
		confirmLabel: "Restart Now",
		cancelLabel: "Later",
		onConfirm: p
	});
	(0, Z.useEffect)(() => {
		i.state !== "ready" || l.current || (l.current = !0, m());
	}, [i.state]), (0, Z.useEffect)(() => {
		let e = new AbortController(), t = vn.has(i.state) ? 1e3 : 3e4, n, o = 0, c = async () => {
			try {
				let t = await U("/api/configuration/update-status", e.signal);
				if (e.signal.aborted) return;
				a(t), o = 0, t.state === "complete" && r((e) => ({
					...e,
					current_version: t.version || e.current_version,
					state: "current",
					message: "You already have the latest beta."
				}));
				let n = await U("/api/configuration/automatic-updates", e.signal);
				!e.signal.aborted && n.result && r(n.result);
			} catch {
				o += 1, o >= bn && !e.signal.aborted && s("Peach is not connected yet. Check the tray app, then refresh the page.");
			}
			!e.signal.aborted && o < bn && (n = setTimeout(c, t));
		};
		return n = setTimeout(c, t), () => {
			e.abort(), clearTimeout(n);
		};
	}, [i.state]);
	let h = () => {
		f || (l.current = !1, s(""), c.run("download", (e) => W("/api/configuration/update", {}, "POST", e), a));
	}, g = () => void c.run("check", (e) => U("/api/configuration/updates", e), r, (t) => {
		r({
			...e,
			state: "error"
		}), c.setError(K(t));
	}), _ = c.error || o, v = i.state === "downloading" && i.total ? `${((i.downloaded || 0) / 1048576).toFixed(1)} / ${(i.total / 1048576).toFixed(1)} MB` : `${i.progress}%`;
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		id: "releaseUpdates",
		title: "Check for Updates",
		aside: /* @__PURE__ */ (0, $.jsx)(V, {
			tone: _ || n.state === "error" || i.state === "error" ? "error" : f ? "progress" : n.state === "available" ? "warning" : n.state === "unchecked" ? "neutral" : "success",
			children: _ || n.state === "error" || i.state === "error" ? "Check Incomplete" : f ? "Preparing Update" : i.state === "ready" ? "Ready to Install" : n.state === "available" ? "Update Available" : n.state === "unchecked" ? "Not Checked" : "Check Complete"
		}),
		children: [
			/* @__PURE__ */ (0, $.jsxs)(te, { children: [
				/* @__PURE__ */ (0, $.jsx)(k, {
					term: "Current Version",
					children: n.current_version
				}),
				/* @__PURE__ */ (0, $.jsx)(k, {
					term: "Installation Type",
					children: n.installation
				}),
				/* @__PURE__ */ (0, $.jsx)(k, {
					term: "Update Channel",
					children: n.channel
				}),
				/* @__PURE__ */ (0, $.jsx)(k, {
					term: "Latest Version",
					children: n.latest_version || "Unavailable"
				}),
				n.package_kind ? /* @__PURE__ */ (0, $.jsxs)(k, {
					term: "Download Contents",
					children: [n.package_kind === "update" ? "App Update Package" : "App and Tools", n.asset_size ? ` · ${(n.asset_size / 1048576).toFixed(1)} MB` : ""]
				}) : null
			] }),
			n.package_kind === "update" ? /* @__PURE__ */ (0, $.jsx)(j, { children: "App updates reuse installed tools. Required tool packages are downloaded separately when tools are missing, damaged, or changed." }) : n.package_kind === "full" ? /* @__PURE__ */ (0, $.jsx)(j, { children: "This update includes media tools." }) : null,
			n.state === "unchecked" && !n.checked_at && !_ && i.state === "idle" ? null : /* @__PURE__ */ (0, $.jsxs)(B, {
				divided: !0,
				children: [
					n.checked_at ? /* @__PURE__ */ (0, $.jsxs)(j, { children: ["Checked ", (/* @__PURE__ */ new Date(n.checked_at * 1e3)).toLocaleString()] }) : null,
					n.state === "available" && !_ ? /* @__PURE__ */ (0, $.jsx)(N, {
						tone: "info",
						title: "Update Available",
						children: n.message
					}) : _ || n.state === "error" ? /* @__PURE__ */ (0, $.jsx)(C, { children: _ || n.message }) : n.state === "unchecked" ? null : /* @__PURE__ */ (0, $.jsx)(j, {
						role: "status",
						children: n.message
					}),
					i.state === "error" ? /* @__PURE__ */ (0, $.jsx)(C, { children: i.message }) : null,
					i.state !== "idle" && i.state !== "error" ? /* @__PURE__ */ (0, $.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, $.jsx)(xe, {
								label: "Update Preparation Progress",
								value: i.progress,
								stops: yn
							}),
							/* @__PURE__ */ (0, $.jsxs)(j, { children: ["Download → Verify → Extract → Prepare to Install · ", i.message] }),
							/* @__PURE__ */ (0, $.jsx)(j, { children: v })
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(A, {
				status: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, $.jsx)(w, {
							href: "https://peach.video/#download",
							children: "Official Website"
						}),
						/* @__PURE__ */ (0, $.jsxs)("span", {
							className: "inline-flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, $.jsx)(w, {
								href: "https://github.com/peach-mitao/peach",
								children: "GitHub"
							}), /* @__PURE__ */ (0, $.jsx)(V, { children: "Updates Unavailable" })]
						}),
						/* @__PURE__ */ (0, $.jsx)(w, {
							href: "https://gitgud.io/peach-mitao/peach/-/releases",
							children: "View Releases"
						})
					]
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)(d, {
						variant: i.state === "ready" || n.state === "available" && n.installation === "独立测试包" ? "secondary" : "primary",
						disabled: f,
						onClick: g,
						...G(c.busy === "check"),
						children: "Check for Updates"
					}),
					n.state === "available" && n.installation === "独立测试包" && i.state !== "ready" ? /* @__PURE__ */ (0, $.jsx)(d, {
						variant: "primary",
						onClick: h,
						...G(f || c.busy === "download"),
						children: "Download and Install"
					}) : null,
					i.state === "ready" ? /* @__PURE__ */ (0, $.jsx)(d, {
						variant: "primary",
						onClick: m,
						children: "Restart and Install"
					}) : null
				]
			})
		]
	});
}
// src/react/settings/upgrade-repairs.tsx
var Sn = {
	pending: "Pending Repair",
	running: "Repairing",
	failed: "Retry Required",
	review: "Review Required",
	complete: "Complete",
	unavailable: "Not Enabled for This Deployment"
};
function Cn() {
	let { snapshot: e } = ht(), [t, n] = (0, Z.useState)(null), r = Y();
	(0, Z.useEffect)(() => n(null), [e]);
	let i = t ?? e?.repairs, a = i?.state || "pending", o = i?.items.reduce((e, t) => e + (t.pending || 0), 0) || 0, s = i?.items.reduce((e, t) => e + (t.failed || 0), 0) || 0, c = i?.items.reduce((e, t) => e + (t.review_count || 0), 0) || 0;
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		id: "upgradeRepairs",
		title: "Automatic Repairs",
		aside: /* @__PURE__ */ (0, $.jsx)(V, {
			tone: a === "failed" ? "error" : a === "running" ? "progress" : a === "review" ? "warning" : a === "complete" ? "success" : "neutral",
			children: /* @__PURE__ */ (0, $.jsx)("span", {
				"data-copy-key": `upgradeRepairs.${a}.status`,
				children: Sn[a] || "Unavailable"
			}, a)
		}),
		children: [
			/* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(j, { children: "Automatically repairs metadata and refreshes caches after an upgrade." }) }),
			/* @__PURE__ */ (0, $.jsxs)(te, { children: [
				/* @__PURE__ */ (0, $.jsxs)(k, {
					term: "Pending",
					children: [o, " items"]
				}),
				/* @__PURE__ */ (0, $.jsxs)(k, {
					term: "Failed",
					children: [s, " items"]
				}),
				/* @__PURE__ */ (0, $.jsxs)(k, {
					term: "Pending Review",
					children: [c, " items"]
				})
			] }),
			i?.message || r.error ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(C, { children: r.error || i?.message }) }) : null,
			a === "running" ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(j, { children: "Metadata and previews are being completed in the background. View progress on the Activity page." }) }) : null,
			/* @__PURE__ */ (0, $.jsx)(A, {
				status: c ? /* @__PURE__ */ (0, $.jsx)(w, {
					href: "/api/configuration/upgrade-repairs/review",
					children: "Download Review Log"
				}) : void 0,
				children: /* @__PURE__ */ (0, $.jsx)(d, {
					size: "small",
					variant: "secondary",
					disabled: !i?.available || a === "running" || !!r.busy || !s && a !== "failed",
					onClick: () => void r.run("retry", (e) => W("/api/configuration/upgrade-repairs/retry", {}, "POST", e), (e) => {
						n(e), document.dispatchEvent(new Event("peach:client-updates"));
					}),
					children: "Retry Failed Items"
				})
			})
		]
	});
}
// src/react/settings/general-settings.tsx
function wn({ data: e, receipt: t, panel: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		...Q(n),
		children: [
			e.updates ? /* @__PURE__ */ (0, $.jsx)(xn, {
				initial: e.updates,
				initialJob: e.update_job
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(Cn, {}),
			e.automatic_updates ? /* @__PURE__ */ (0, $.jsx)(hn, {
				initial: e.automatic_updates,
				receipt: t
			}) : null,
			e.startup ? /* @__PURE__ */ (0, $.jsx)(Tn, {
				startup: e.startup,
				receipt: t
			}) : null
		]
	});
}
function Tn({ startup: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.enabled), [i, a] = (0, Z.useState)(e.silent), [o, s] = (0, Z.useState)(e.desktop), c = Y(), l = e.available && !e.desktop_message;
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Launch at Startup",
		onSubmit: (r) => {
			r.preventDefault(), e.available && c.run("save", (e) => W("/api/configuration/startup", {
				enabled: n,
				silent: i,
				desktop: o
			}, "POST", e), () => t("Settings saved"));
		},
		children: [
			/* @__PURE__ */ (0, $.jsxs)(P, { children: [
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Launch Peach at startup",
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": "Launch Peach at startup",
						isSelected: n,
						isDisabled: !e.available,
						onChange: r
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Start in the tray without opening the web app",
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": "Start in the tray without opening the web app",
						isSelected: i,
						isDisabled: !e.available || !n,
						onChange: a
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Create a desktop shortcut",
					description: e.desktop_message || void 0,
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": "Create a desktop shortcut",
						isSelected: o,
						isDisabled: !l,
						onChange: s
					})
				})
			] }),
			e.message || c.error ? /* @__PURE__ */ (0, $.jsxs)(B, {
				divided: !0,
				children: [e.message ? /* @__PURE__ */ (0, $.jsx)(j, { children: e.message }) : null, c.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: c.error }) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(A, { children: /* @__PURE__ */ (0, $.jsx)(d, {
				type: "submit",
				disabled: !e.available,
				...G(c.busy === "save"),
				children: "Save settings"
			}) })
		]
	});
}
// src/react/restart-redirect.ts
var En = 8e3, Dn = [
	{
		name: "Hard drive, or up to 8 GB RAM",
		cache: "10–20 GiB",
		read: "256 / 128 KB",
		task: "1"
	},
	{
		name: "SATA SSD, 8–16 GB RAM",
		cache: "20–50 GiB",
		read: "256 / 128 KB",
		task: "1–2"
	},
	{
		name: "NVMe SSD, 16 GB or more RAM",
		cache: "50–100 GiB",
		read: "256 / 128 KB",
		task: "Start with 2"
	}
], On = [
	["cache", "Cache Limit"],
	["read", "Read Size (Default / Minimum)"],
	["task", "Concurrent Videos"]
];
function kn() {
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "@container flex flex-col gap-3",
		children: /* @__PURE__ */ (0, $.jsxs)(b, {
			summary: "CloudDrive Setup Help",
			children: [
				/* @__PURE__ */ (0, $.jsxs)(j, { children: ["First mount cloud storage from CloudDrive2 or OpenList as a local folder, then select it here.", /* @__PURE__ */ (0, $.jsx)(w, {
					href: "https://www.clouddrive2.com/help.html",
					children: "Mounting Help"
				})] }),
				/* @__PURE__ */ (0, $.jsx)(j, { children: "Choose an initial cache size based on its drive and available memory, then adjust it based on playback performance." }),
				/* @__PURE__ */ (0, $.jsx)(j, { children: "File operations require write access from both the mounting tool and cloud account. Uploading, creating folders, renaming, and moving on Quack Cloud Drive require CloudDrive2 v1.1.0 or later; deleting and copying are not yet supported." }),
				/* @__PURE__ */ (0, $.jsx)("ul", {
					"aria-label": "Recommendations by cache drive",
					className: "flex flex-col gap-2",
					children: Dn.map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
						className: "flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
						children: [/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-body-medium text-text-primary",
							children: e.name
						}), /* @__PURE__ */ (0, $.jsx)("dl", {
							className: "inline-grid grid-cols-1 gap-2 @md:grid-cols-3",
							children: On.map(([t, n]) => /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, $.jsx)("dt", {
									className: "text-caption-1-regular text-text-secondary",
									children: n
								}), /* @__PURE__ */ (0, $.jsx)("dd", {
									className: "text-body-regular text-text-primary",
									children: e[t]
								})]
							}, t))
						})]
					}, e.name))
				}),
				/* @__PURE__ */ (0, $.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, $.jsx)("li", { children: "Set the cache limit and cleanup method in CloudDrive Settings, and choose LRU. Do not set the limit to 0; leave at least 40 GiB free on the system drive. Reopen Settings afterward to confirm the values were saved." }),
						/* @__PURE__ */ (0, $.jsx)("li", { children: "Set the read size and download threads in each cloud drive’s download settings. Start with 2 threads." }),
						/* @__PURE__ */ (0, $.jsx)("li", { children: "Buffer Cache uses memory; disk cache and folder cache use drive space. Each must be configured separately." })
					]
				}),
				/* @__PURE__ */ (0, $.jsx)(j, { children: /* @__PURE__ */ (0, $.jsx)(w, {
					href: "https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md",
					children: "Full Setup and Tuning Guide"
				}) })
			]
		})
	});
}
// src/react/settings/cloud-proxy-settings.tsx
var An = "/api/configuration/cloud-proxies", jn = [
	["direct", "Direct"],
	["system", "Use System Proxy"],
	["http", "HTTP Proxy"],
	["socks5", "SOCKS5 Proxy"]
];
function Mn({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(!0), a = (0, Z.useRef)(/* @__PURE__ */ new Set()), o = (0, Z.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, Z.useState)(!1), l = (0, Z.useRef)(() => void 0), u = Y(), f = () => {
		o.current.size || u.run("refresh", (e) => U(An, e), (e) => {
			a.current.clear(), n(e), i(!1);
		}, (e) => {
			i(!1), u.setError(e instanceof Error ? e.message : "Could not load cloud drive proxy settings");
		});
	};
	return l.current = f, (0, Z.useEffect)(() => {
		l.current();
		let e = () => {
			a.current.size || l.current();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, []), (0, Z.useEffect)(() => {
		if (!t) return;
		let e = (e) => e.mode === "http" || e.mode === "socks5";
		J("cloudProxy", {
			configured: t.configured !== !1,
			unlinked: t.unlinked?.length ?? 0,
			accounts: t.accounts.map((t) => [e(t.data), e(t.api)])
		});
	}, [t]), r ? /* @__PURE__ */ (0, $.jsx)(Ee, {
		label: "Loading cloud drive proxy settings",
		html: ze
	}) : /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "CloudDrive Proxy",
		children: [/* @__PURE__ */ (0, $.jsxs)(B, { children: [/* @__PURE__ */ (0, $.jsx)(j, { children: m }), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				u.error ? /* @__PURE__ */ (0, $.jsxs)(N, {
					tone: "error",
					title: "Settings Not Loaded",
					children: [
						u.error,
						" ",
						/* @__PURE__ */ (0, $.jsx)(se, {
							href: "/settings/downloads",
							size: "small",
							children: "Download Settings"
						})
					]
				}) : null,
				t?.configured === !1 ? /* @__PURE__ */ (0, $.jsxs)(j, { children: ["Enter the CloudDrive2 URL and API token, then configure proxies for each cloud account here. ", /* @__PURE__ */ (0, $.jsx)(se, {
					href: "/settings/downloads",
					size: "small",
					children: "Download Settings"
				})] }) : t?.accounts.length === 0 && !t.unlinked?.length ? /* @__PURE__ */ (0, $.jsx)(j, { children: "No libraries currently use CloudDrive." }) : null,
				t?.unlinked?.map((e) => /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(ne, { children: /* @__PURE__ */ (0, $.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)(je, { mark: jt(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, $.jsx)(j, { children: "Unmatched CloudDrive Account" })]
				}, e.root)),
				t?.accounts.map((t) => /* @__PURE__ */ (0, $.jsx)(Nn, {
					initial: t,
					receipt: e,
					onDirty: () => a.current.add(t.id),
					onSaving: (e) => {
						e ? o.current.add(t.id) : o.current.delete(t.id), c(!!o.current.size);
					},
					onSaved: (e) => {
						a.current.delete(e.id), n((t) => t && {
							...t,
							accounts: t.accounts.map((t) => t.id === e.id ? e : t)
						});
					}
				}, t.id + t.revision))
			]
		})] }), /* @__PURE__ */ (0, $.jsx)(A, { children: /* @__PURE__ */ (0, $.jsx)(d, {
			variant: "secondary",
			disabled: s,
			onClick: f,
			...G(u.busy === "refresh"),
			children: "Reload"
		}) })]
	});
}
function Nn({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)([]), l = a.libraries?.map((e) => e.name).join(", ") || a.name, u = Y(), f = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), c((t) => t.includes(e) ? t : [...t, e]), n();
	};
	return /* @__PURE__ */ (0, $.jsxs)("form", {
		"aria-label": `${l} proxy`,
		onSubmit: (e) => {
			e.preventDefault(), i(!0), u.run("save", (e) => W(An, {
				id: a.id,
				revision: a.revision,
				...s.includes("api") ? { api: a.api } : {},
				...s.includes("data") ? { data: a.data } : {}
			}, "POST", e), (e) => {
				o(e), c([]), r(e), t("CloudDrive proxy saved");
			}).finally(() => i(!1));
		},
		className: "flex min-w-0 flex-col gap-4 border-t border-separator-border pt-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(ne, { children: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(je, { mark: jt(a.libraries?.[0]?.location || (a.cloud === "115open" ? "115" : a.cloud.toLowerCase())) }), l]
			}) }),
			/* @__PURE__ */ (0, $.jsxs)(j, { children: [
				a.name,
				" · ",
				a.path
			] }),
			/* @__PURE__ */ (0, $.jsx)(Pn, {
				label: "Data Proxy",
				value: a.data,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => f("data", e)
			}),
			/* @__PURE__ */ (0, $.jsx)(Pn, {
				label: "API Proxy",
				value: a.api,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => f("api", e)
			}),
			a.writable ? null : /* @__PURE__ */ (0, $.jsx)(j, { children: "The API token needs “Modify Cloud Drive” permission to save." }),
			u.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "Not saved",
				children: u.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, $.jsx)(d, {
					type: "submit",
					disabled: !a.writable || !s.length,
					...G(u.busy === "save"),
					children: "Save settings"
				})
			})
		]
	});
}
function Pn({ label: e, value: t, disabled: n, onChange: r }) {
	let i = t.mode === "http" || t.mode === "socks5";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)(ne, { children: e }),
			/* @__PURE__ */ (0, $.jsxs)(I, {
				"aria-label": e,
				selectedKey: t.mode,
				isDisabled: n,
				onSelectionChange: (e) => {
					e && r({
						...t,
						mode: String(e)
					});
				},
				children: [t.mode === "unknown" ? /* @__PURE__ */ (0, $.jsx)(L, {
					id: "unknown",
					children: "Unrecognized Proxy Type"
				}) : null, jn.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(L, {
					id: e,
					children: t
				}, e))]
			}),
			i ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, $.jsx)(M, {
					className: "min-w-40 flex-1",
					label: `${e}URL`,
					value: t.host,
					autoComplete: "off",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						host: e
					})
				}), /* @__PURE__ */ (0, $.jsx)(M, {
					className: "w-full sm:w-28",
					label: `${e}Port`,
					value: t.port ? String(t.port) : "",
					inputMode: "numeric",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						port: Number(e)
					})
				})]
			}), /* @__PURE__ */ (0, $.jsxs)(b, {
				summary: "Proxy Authentication",
				children: [
					/* @__PURE__ */ (0, $.jsx)(M, {
						label: `${e}Username`,
						value: t.username,
						autoComplete: "off",
						isDisabled: n,
						onChange: (e) => r({
							...t,
							username: e
						})
					}),
					/* @__PURE__ */ (0, $.jsx)(M, {
						label: `${e}Password`,
						type: "password",
						value: t.password || "",
						autoComplete: "new-password",
						isDisabled: n,
						placeholder: t.password_set ? "Saved; leave blank to keep it" : "Optional",
						onChange: (e) => r({
							...t,
							password: e
						})
					}),
					t.password_set ? /* @__PURE__ */ (0, $.jsx)(v, {
						isSelected: !!t.clear_password,
						isDisabled: n,
						onChange: (e) => r({
							...t,
							clear_password: e
						}),
						children: "Clear saved password"
					}) : null
				]
			})] }) : null
		]
	});
}
// src/react/settings/library-icon-picker.tsx
var Fn = [
	["", "Auto"],
	["hard-drive", "Drive"],
	["database", "Archive"],
	["heart", "Favorite"],
	["heart-hand", "Intimate"],
	["flame", "Passion"],
	["cherry", "Cherry"],
	["lollipop", "Sweetheart"],
	["candy", "Candy"],
	["banana", "Banana"],
	["droplets", "Drops"],
	["venus", "Women"],
	["mars", "Men"],
	["venus-and-mars", "Couples"],
	["gem", "Featured"],
	["crown", "Queen"],
	["ribbon", "Ribbon"],
	["shirt", "Uniform"],
	["graduation-cap", "Student"],
	["stethoscope", "Nurse"],
	["glasses", "Glasses"],
	["footprints", "Footprints"],
	["hand", "Hands"],
	["flower", "Flower"],
	["venetian-mask", "Cosplay"],
	["rabbit", "Bunny"],
	["paw-print", "Animal Ears"],
	["dumbbell", "Fitness"],
	["bed-double", "Bedroom"],
	["bath", "Bathroom"],
	["key-round", "Private"],
	["wine", "Tipsy"],
	["cigarette", "Smoking"],
	["moon", "Night"],
	["sparkles", "Fantasy"],
	["camera", "Photo Book"],
	["video", "Video"],
	["film", "Movie"],
	["image", "Gallery"],
	["gamepad-2", "Games"],
	["star", "Favorites"],
	["tags", "Theme"]
];
function In(e) {
	let t = e === "local" ? "" : fe[e];
	return t ? [t, "Auto"] : ["hard-drive", "Default"];
}
var Ln = "auto";
function Rn({ value: t, label: r, kind: i = "local", onChange: a }) {
	let l = (0, Z.useRef)(null), [u, f] = (0, Z.useState)(!1), [p, m] = (0, Z.useState)(t), [h, g] = In(i);
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(d, {
		ref: l,
		variant: "secondary",
		className: "self-start",
		"aria-label": r,
		"aria-haspopup": "dialog",
		"aria-expanded": u,
		onClick: () => {
			m(t), f(!0);
		},
		children: /* @__PURE__ */ (0, $.jsxs)("span", {
			"data-icon-choice": !0,
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)(je, { mark: t || h }), ((e) => e && Fn.find(([t]) => t === e)?.[1] || g)(t)]
		})
	}), /* @__PURE__ */ (0, $.jsx)(n, {
		triggerRef: l,
		isOpen: u,
		onOpenChange: f,
		placement: "bottom start",
		offset: 4,
		className: pe,
		children: /* @__PURE__ */ (0, $.jsxs)(o, {
			"aria-label": `${r}Available Icons`,
			className: "flex w-72 flex-col gap-3 outline-none",
			children: [
				/* @__PURE__ */ (0, $.jsx)(e, {
					slot: "title",
					className: "px-1 text-body-medium text-text-primary",
					children: "Choose Library Icon"
				}),
				/* @__PURE__ */ (0, $.jsx)(s, {
					"aria-label": "Available Icons",
					value: p || Ln,
					onChange: (e) => m(e === Ln ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: Fn.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(c, {
						value: e || Ln,
						"aria-label": e ? t : g,
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, $.jsx)(je, { mark: e || h })
					}, e || Ln))
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-separator-border pt-2.5",
					children: [/* @__PURE__ */ (0, $.jsx)(d, {
						variant: "secondary",
						onClick: () => f(!1),
						children: "Cancel"
					}), /* @__PURE__ */ (0, $.jsx)(d, {
						disabled: p === t,
						onClick: () => {
							a(p), f(!1);
						},
						children: "Apply"
					})]
				})
			]
		})
	})] });
}
// src/react/settings/library-policy-settings.tsx
var zn = [
	["probe", "Read Video Details"],
	["metadata", "Fetch metadata online"],
	["cover", "Fetch covers online"],
	["people", "Fetch performer images online"],
	["preview", "Generate Contact Sheet"]
], Bn = [
	"probe",
	"metadata",
	"cover",
	"people",
	"preview"
], Vn = [
	[
		"auto",
		"Auto Complete",
		"Fetch missing data online"
	],
	[
		"local",
		"Local Data Only",
		"Use only local NFO files and images; do not connect online"
	],
	[
		"custom",
		"Custom",
		"Choose each processing step"
	]
];
function Hn() {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-policy-legend": "",
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, $.jsx)(j, { children: ve }), /* @__PURE__ */ (0, $.jsxs)(b, {
			summary: "Compare Processing Modes",
			children: [/* @__PURE__ */ (0, $.jsxs)("table", {
				"data-policy-matrix": "",
				className: "text-body-2-regular",
				children: [/* @__PURE__ */ (0, $.jsx)("thead", { children: /* @__PURE__ */ (0, $.jsxs)("tr", { children: [/* @__PURE__ */ (0, $.jsx)("th", {
					scope: "col",
					children: /* @__PURE__ */ (0, $.jsx)(a, { children: "Step" })
				}), he.map((e) => /* @__PURE__ */ (0, $.jsx)("th", {
					scope: "col",
					children: e
				}, e))] }) }), /* @__PURE__ */ (0, $.jsx)("tbody", { children: _e.map(([e, ...t]) => /* @__PURE__ */ (0, $.jsxs)("tr", { children: [/* @__PURE__ */ (0, $.jsx)("th", {
					scope: "row",
					children: e
				}), t.map((e, t) => /* @__PURE__ */ (0, $.jsx)("td", {
					"data-policy-cell": e === "✓" ? "on" : e === "—" ? "off" : "choice",
					children: e === "✓" ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-label": "Yes",
						children: "✓"
					}) : e === "—" ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-label": "No",
						children: "—"
					}) : e
				}, he[t]))] }, e)) })]
			}), /* @__PURE__ */ (0, $.jsx)(j, { children: ge })]
		})]
	});
}
function Un({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, $.jsx)(Oe, {
		className: "w-full",
		"aria-label": `${e} processing mode`,
		selectedKey: t,
		prefix: "Processing Mode",
		renderValue: /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate",
			children: Vn.find(([e]) => e === t)?.[1]
		}),
		onSelectionChange: (e) => n(String(e)),
		children: Vn.map(([e, t, n]) => /* @__PURE__ */ (0, $.jsx)(L, {
			id: e,
			textValue: t,
			children: /* @__PURE__ */ (0, $.jsxs)("span", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, $.jsx)("span", { children: t }), /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-2-regular text-text-secondary whitespace-normal",
					children: n
				})]
			})
		}, e))
	});
}
function Wn({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, $.jsx)(b, {
		defaultOpen: !0,
		summary: `${e} processing steps (${t.length}/${zn.length})`,
		children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-wrap gap-x-6 gap-y-2",
			role: "group",
			"aria-label": `${e} processing steps`,
			children: zn.map(([e, r]) => /* @__PURE__ */ (0, $.jsx)(v, {
				isSelected: t.includes(e),
				onChange: (r) => n(r ? [...t, e] : t.filter((t) => t !== e)),
				children: r
			}, e))
		})
	});
}
function Gn({ id: e, name: t, value: i, onChange: a }) {
	let s = (0, Z.useRef)(null), [c, u] = (0, Z.useState)(!1), d = l.find(([e]) => e === i)?.[1] || "No Color", f = (t) => {
		a(t), it(e, t), u(!1);
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("button", {
		ref: s,
		type: "button",
		className: "text-body-medium",
		"data-glow-chip": "",
		"data-library-color-trigger": "",
		"aria-haspopup": "dialog",
		"aria-expanded": c,
		"aria-label": `${t || "Untitled Library"} source color: ${d}`,
		title: d,
		onClick: () => u(!0),
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: "text-text-tertiary",
				children: "Source Color"
			}),
			i ? /* @__PURE__ */ (0, $.jsx)("span", {
				"data-glow-ball": "",
				"aria-hidden": "true",
				"data-accent-ball": i
			}) : /* @__PURE__ */ (0, $.jsx)("span", {
				"data-glow-ball": "",
				"data-library-none": "",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, $.jsx)("span", { children: d })
		]
	}), /* @__PURE__ */ (0, $.jsx)(r, {
		getContainer: () => nt(s.current),
		children: /* @__PURE__ */ (0, $.jsx)(n, {
			triggerRef: s,
			isOpen: c,
			onOpenChange: u,
			placement: "bottom start",
			offset: 8,
			containerPadding: 12,
			className: pe,
			children: /* @__PURE__ */ (0, $.jsxs)(o, {
				"aria-label": `${t || "Untitled Library"} Source Color`,
				className: "outline-none",
				children: [/* @__PURE__ */ (0, $.jsx)("p", {
					className: "px-1 pb-2 text-body-medium text-text-primary",
					children: "Choose Source Color"
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-accent-grid": "",
					"data-library-colors": "",
					role: "group",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": !i,
						title: "No Color",
						"aria-label": "No Color",
						onClick: () => f(""),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-glow-ball": "",
							"data-library-none": "",
							"aria-hidden": "true"
						})
					}), l.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": e === i,
						title: t,
						"aria-label": t,
						onClick: () => f(e),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-glow-ball": "",
							"aria-hidden": "true",
							"data-accent-ball": e
						})
					}, e))]
				})]
			})
		})
	})] });
}
// src/react/settings/push-discovery-settings.tsx
var Kn = "/api/configuration/push-discovery", qn = "/api/configuration/push-discovery/secret";
function Jn({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.prefixes), [o, s] = (0, Z.useState)(""), c = Y(), l = n.media_roots, [u, f] = (0, Z.useState)(e), p = (e, n) => {
		r(e), f(e), a(e.prefixes), s(""), t(n);
	}, m = (e, t) => a((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), h = (e) => {
		e.preventDefault();
		let t = {
			enabled: n.enabled,
			watch_local: n.watch_local,
			cloud: n.cloud,
			prefixes: i
		};
		c.run("save", (e) => W(Kn, t, "POST", e), (e) => p(e, "Settings saved"), (e) => s(K(e)));
	}, g = () => {
		c.run("secret", (e) => W(qn, {}, "POST", e), (e) => p(e, "Shared secret changed"), (e) => s(K(e)));
	}, _ = `Imported ${u.queue.ingested} files` + (u.queue.failed ? `, ${u.queue.failed} failed` : "") + (u.queue.pending ? `, ${u.queue.pending} remaining in queue` : ""), v = u.local_running ? `Watching ${u.local_roots.join(", ")}` : u.local_message || "Not Running";
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		id: "pushDiscovery",
		title: "Automatically Discover New Files",
		onSubmit: h,
		children: [
			/* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: "Local Watcher"
				}), /* @__PURE__ */ (0, $.jsx)(V, {
					tone: !u.enabled || !u.watch_local ? "neutral" : u.local_running ? "progress" : "warning",
					children: !u.enabled || !u.watch_local ? "Disabled" : u.local_running ? "Running" : "Not Running"
				})]
			}) }),
			/* @__PURE__ */ (0, $.jsxs)(P, { children: [
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Import new files automatically",
					description: u.enabled ? _ : void 0,
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": "Import new files automatically",
						isSelected: n.enabled,
						isDisabled: !n.available,
						onChange: (e) => r({
							...n,
							enabled: e
						})
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Watch local folders",
					description: u.enabled && u.watch_local ? v : void 0,
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": "Watch local folders",
						isSelected: n.watch_local,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							watch_local: e
						})
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(R, {
					label: "Receive CloudDrive2 notifications",
					children: /* @__PURE__ */ (0, $.jsx)(H, {
						"aria-label": "Receive CloudDrive2 notifications",
						isSelected: n.cloud,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							cloud: e
						})
					})
				}),
				u.enabled && u.cloud ? /* @__PURE__ */ (0, $.jsx)(R, {
					label: "Webhook Configuration",
					description: u.config_toml ? "Paste into CloudDrive2 Settings → Webhooks. Membership is required. Paste it again after changing the secret." : u.origin ? "No shared secret yet. Save settings to generate one." : "A local network URL reachable by CloudDrive2 is required."
				}) : null
			] }),
			u.enabled && u.queue.last_error ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(N, {
					tone: "error",
					title: "Most Recent Import Failed",
					children: u.queue.last_error
				})
			}) : null,
			u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-3",
					children: /* @__PURE__ */ (0, $.jsxs)(b, {
						summary: "View Configuration",
						children: [/* @__PURE__ */ (0, $.jsx)(St, {
							code: u.config_toml,
							language: "toml",
							label: "CloudDrive2 Configuration",
							bounded: !1,
							copyLabel: "Copy Configuration",
							onCopy: () => t("CloudDrive2 configuration copied")
						}), /* @__PURE__ */ (0, $.jsx)(j, { children: "If the Windows desktop app reports this as invalid when pasted, save it as a .toml file in %LOCALAPPDATA%\\CloudDrive.WinUI\\webhooks\\." })]
					})
				})
			}) : null,
			n.enabled && n.cloud ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, $.jsx)(ne, { children: "Cloud Path Prefixes" }),
						/* @__PURE__ */ (0, $.jsx)("div", {
							role: "group",
							"aria-label": "Cloud Path Prefixes",
							className: "flex flex-col gap-3",
							children: i.map((e, t) => /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, $.jsx)(M, {
										className: "min-w-0 flex-1",
										"aria-label": `Cloud Path Prefixes ${t + 1}`,
										placeholder: "/115",
										autoComplete: "off",
										maxLength: 200,
										value: e.prefix,
										onChange: (e) => m(t, { prefix: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(Oe, {
										"aria-label": `Prefix ${t + 1} media root`,
										prefix: "Mapped Folder",
										selectedKey: e.root,
										onSelectionChange: (e) => {
											e !== null && m(t, { root: String(e) });
										},
										children: l.map((e) => /* @__PURE__ */ (0, $.jsx)(L, {
											id: e,
											children: e
										}, e))
									}),
									/* @__PURE__ */ (0, $.jsx)(d, {
										variant: "danger",
										iconOnly: !0,
										leadingIcon: le,
										"aria-label": "Remove this row",
										onClick: () => a((e) => e.filter((e, n) => n !== t))
									})
								]
							}, t))
						}),
						/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(d, {
							variant: "secondary",
							onClick: () => a((e) => [...e, {
								prefix: "",
								root: l[0] ?? ""
							}]),
							children: "Add Prefix"
						}) })
					]
				})
			}) : null,
			o || c.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(C, { children: o || c.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)(A, { children: [u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, $.jsx)(d, {
				variant: "secondary",
				onClick: g,
				disabled: !n.available,
				...G(c.busy === "secret"),
				children: "Change Secret"
			}) : null, /* @__PURE__ */ (0, $.jsx)(d, {
				type: "submit",
				disabled: !n.available,
				...G(c.busy === "save"),
				children: "Save settings"
			})] })
		]
	});
}
// src/react/settings/media-settings.tsx
var Yn = (e) => Et.find(([t]) => t === e)?.[1] ?? e, Xn = [...Et, ["smb", "SMB Share"]], Zn = (e) => e.library_icon || In(e.transport === "smb" ? "smb" : e.location)[0], Qn = async (e) => (await W(me, { initial: e })).path, $n = (e) => ({
	library_id: e.library_id,
	library: e.library,
	library_icon: e.library_icon,
	library_color: e.library_color,
	library_policy: e.library_policy,
	library_stages: e.library_stages
}), er = (e) => e.library_stages ? Bn.filter((t) => e.library_stages.split(",").includes(t)) : [], tr = (e = "") => ({
	path: e,
	transport: e.startsWith("smb://") ? "smb" : "filesystem",
	location: "local",
	root: "",
	library_id: ot(),
	library: "",
	library_icon: "",
	library_color: "",
	library_policy: "auto",
	library_stages: "",
	cost: "free"
});
function nr(e) {
	let t = e.media_sources?.filter((e) => Et.some(([t]) => t === e.location));
	return t?.length ? t.map((e) => ({
		transport: e.transport === "smb" || e.path.startsWith("smb://") ? "smb" : "filesystem",
		smb_username: e.smb_username,
		smb_password: "",
		smb_encrypt: e.smb_encrypt,
		smb_password_saved: e.smb_password_saved,
		path: e.path,
		location: e.location,
		root: e.root,
		library: e.library || "",
		library_icon: e.library_icon || "",
		library_color: e.library_color || "",
		library_policy: e.library_policy || "auto",
		library_stages: e.library_stages || "",
		root_id: e.root_id,
		library_id: e.library_id || ot(),
		cost: e.cost ?? mt(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => tr(e));
}
var rr = (e) => !(e instanceof u) || e.status !== 400 ? null : e.body?.errors ?? null;
function ir({ data: e, receipt: t, panel: n }) {
	let r = !!e.media_sources?.some((e) => At(e.location));
	return (0, Z.useEffect)(() => {
		if (e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of nr(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			J("media", {
				folders: [...t.values()],
				cloud: r
			});
		}
		let t = e.push_discovery;
		t && J("discovery", {
			enabled: t.enabled,
			watchLocal: t.watch_local,
			cloud: t.cloud,
			webhook: t.enabled && t.cloud && !!t.config_toml,
			prefixes: t.prefixes.length
		});
	}, [e, r]), /* @__PURE__ */ (0, $.jsxs)("div", {
		...Q(n),
		children: [
			e.editable ? /* @__PURE__ */ (0, $.jsx)(ar, {
				data: e,
				receipt: t
			}) : /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "neutral",
				title: "Read Only",
				children: e.notice
			}),
			e.editable ? null : /* @__PURE__ */ (0, $.jsx)(sr, { data: e }),
			r ? /* @__PURE__ */ (0, $.jsx)(Mn, { receipt: t }) : null,
			e.push_discovery ? /* @__PURE__ */ (0, $.jsx)(Jn, {
				initial: e.push_discovery,
				receipt: t
			}) : null
		]
	});
}
function ar({ data: e, receipt: t }) {
	let { rows: n, edit: r, add: i, remove: a, errors: o, setErrors: s, picking: c, pick: l, inputRef: u } = Mt({
		initial: () => nr(e),
		blank: () => tr(),
		pickFolder: Qn,
		describe: K
	}), [f, p] = (0, Z.useState)(!1), [m, h] = (0, Z.useState)(!1), [_, y] = (0, Z.useState)(""), [b, x] = (0, Z.useState)({}), [S, ee] = (0, Z.useState)(null), C = (0, Z.useRef)(e.revision), T = Y();
	gt();
	let E = (e, t) => {
		n.forEach((i, a) => {
			i.library_id === n[e].library_id && r(a, t);
		});
	}, D = [...n.reduce((e, t) => e.has(t.library_id) ? e : e.set(t.library_id, t), /* @__PURE__ */ new Map()).values()], [O, k] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		if (!O) return;
		let e = document.querySelector(`[data-library-key="${CSS.escape(O)}"] [data-library-head] input`);
		e?.scrollIntoView({ block: "center" }), e?.focus(), k(null);
	}, [O]);
	let te = (e, t) => {
		let i = n.find((e) => e.library_id === t);
		if (i) {
			r(e, $n(i));
			return;
		}
		let a = ot();
		r(e, {
			library_id: a,
			library: "",
			library_icon: "",
			library_color: "",
			library_policy: "auto",
			library_stages: ""
		}), k(a);
	};
	(0, Z.useEffect)(() => {
		if (!S) return;
		let e = setTimeout(() => location.assign(S.url), En);
		return () => clearTimeout(e);
	}, [S]);
	let ne = (r) => {
		r.preventDefault();
		let i = n.findIndex((e) => !e.cost);
		if (i >= 0) {
			h(!0);
			let e = r.currentTarget;
			requestAnimationFrame(() => e.querySelector(`[data-media-read-policy="${i}"] button`)?.focus());
		} else y(""), T.run("save", (t) => W(g, {
			revision: C.current,
			media_dirs: n.map((e) => e.path),
			...e.media_sources ? { media_sources: n } : {},
			port: String(e.port),
			scan_now: f
		}, "POST", t), (e) => {
			C.current = e.revision, s([]), t("Settings saved"), ee(e);
		}, (e) => {
			let t = rr(e);
			s(t?.media_dirs ?? []), (!t || t.port) && y(t?.port || K(e));
		});
	};
	if (S) return /* @__PURE__ */ (0, $.jsx)(F, {
		title: "Libraries & Folders",
		children: /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsxs)(N, {
			tone: "success",
			title: "Settings Saved",
			children: [
				"Peach is restarting. You will be redirected shortly, or click ",
				/* @__PURE__ */ (0, $.jsx)(se, {
					href: S.url,
					size: "small",
					children: "Open Library"
				}),
				"."
			]
		}) })
	});
	let re = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), ae = n.some((e) => At(e.location)), oe = ae ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Libraries & Folders",
		onSubmit: ne,
		children: [/* @__PURE__ */ (0, $.jsxs)(B, { children: [
			/* @__PURE__ */ (0, $.jsx)(Hn, {}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				role: "group",
				"aria-label": "Libraries & Folders",
				className: "flex flex-col gap-4",
				children: D.map((e) => {
					let t = n.findIndex((t) => t.library_id === e.library_id), s = n.map((e, t) => ({
						row: e,
						index: t
					})).filter(({ row: t }) => t.library_id === e.library_id), f = e.library_policy, p = e.library || "Untitled Library";
					return /* @__PURE__ */ (0, $.jsxs)("div", {
						"data-library-block": "",
						"data-library-key": e.library_id,
						className: Re({
							variant: "raised",
							padding: "none",
							className: "flex flex-col p-2"
						}),
						"data-library": e.library_color ? e.library_id : void 0,
						children: [
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-library-head": "",
								children: [
									/* @__PURE__ */ (0, $.jsx)(Rn, {
										label: `${p} icon`,
										value: e.library_icon,
										kind: e.transport === "smb" ? "smb" : e.location,
										onChange: (e) => E(t, { library_icon: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(M, {
										className: "w-full",
										"aria-label": `${p} name`,
										maxLength: 80,
										placeholder: "Library Name",
										value: e.library,
										onChange: (e) => E(t, { library: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(Gn, {
										id: e.library_id,
										name: e.library,
										value: e.library_color,
										onChange: (e) => E(t, { library_color: e })
									}),
									/* @__PURE__ */ (0, $.jsx)(Un, {
										name: p,
										value: f,
										onChange: (n) => E(t, {
											library_policy: n,
											library_stages: n === "custom" ? e.library_stages || Bn.join(",") : ""
										})
									})
								]
							}),
							f === "custom" ? /* @__PURE__ */ (0, $.jsx)(Wn, {
								name: p,
								value: er(e),
								onChange: (e) => E(t, { library_stages: Bn.filter((t) => e.includes(t)).join(",") })
							}) : null,
							/* @__PURE__ */ (0, $.jsxs)("div", {
								"data-library-folders": "",
								role: "group",
								"aria-label": `${p} folders`,
								children: [s.map(({ row: t, index: i }) => /* @__PURE__ */ (0, $.jsxs)(Tt, {
									label: `Media Folder ${i + 1}`,
									path: t.path,
									onPath: (e) => r(i, {
										path: e,
										transport: e.startsWith("smb://") ? "smb" : t.transport
									}),
									error: o[i],
									inputRef: u(i),
									picking: c === i,
									onPick: () => void l(i),
									onRemove: n.length > 1 ? () => a(i) : void 0,
									status: re(t) ? /* @__PURE__ */ (0, $.jsx)(or, { online: re(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, $.jsxs)(wt, { children: [
										/* @__PURE__ */ (0, $.jsx)(kt, {
											index: i,
											value: t.transport === "smb" ? "smb" : t.location,
											options: Xn,
											onChange: (e) => {
												let n = e === "smb";
												r(i, {
													transport: n ? "smb" : "filesystem",
													location: n ? "local" : e,
													cost: n || e === "local" ? "free" : "",
													path: n ? t.path.startsWith("smb://") ? t.path : "smb://" : t.path.startsWith("smb://") ? "" : t.path
												}), x((e) => {
													let t = { ...e };
													return delete t[i], t;
												});
											}
										}),
										/* @__PURE__ */ (0, $.jsx)(Dt, {
											index: i,
											cost: t.cost,
											onChange: (e) => r(i, { cost: e }),
											error: m && !t.cost ? "Choose a media access policy" : void 0
										}),
										t.root_id && !re(t) ? /* @__PURE__ */ (0, $.jsx)(Ct, {
											label: "Change Method",
											className: "w-full @lg:w-auto @lg:flex-1",
											children: /* @__PURE__ */ (0, $.jsxs)(I, {
												className: "w-full",
												"aria-label": `Folder change method ${i + 1}`,
												placeholder: "Choose how to handle this folder",
												selectedKey: t.change_mode || null,
												onSelectionChange: (e) => {
													e === "add" ? r(i, {
														root_id: void 0,
														root: "",
														change_mode: ""
													}) : r(i, { change_mode: "relocate" });
												},
												children: [/* @__PURE__ */ (0, $.jsx)(L, {
													id: "relocate",
													children: "Relocate this folder and keep file records"
												}), /* @__PURE__ */ (0, $.jsx)(L, {
													id: "add",
													children: "Add as Another Folder"
												})]
											})
										}) : null,
										D.length > 1 ? /* @__PURE__ */ (0, $.jsx)(Ct, {
											label: "Move to Library",
											className: "w-full @lg:w-48",
											children: /* @__PURE__ */ (0, $.jsxs)(I, {
												className: "w-full",
												"aria-label": `Folder library ${i + 1}`,
												selectedKey: t.library_id,
												renderValue: /* @__PURE__ */ (0, $.jsxs)("span", {
													className: "flex min-w-0 items-center gap-2",
													children: [/* @__PURE__ */ (0, $.jsx)(je, { mark: Zn(e) }), /* @__PURE__ */ (0, $.jsx)("span", {
														className: "truncate",
														children: p
													})]
												}),
												onSelectionChange: (e) => {
													e && te(i, String(e));
												},
												children: [D.map((e) => /* @__PURE__ */ (0, $.jsx)(L, {
													id: e.library_id,
													textValue: e.library || "Untitled Library",
													children: /* @__PURE__ */ (0, $.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, $.jsx)(je, { mark: Zn(e) }), /* @__PURE__ */ (0, $.jsx)("span", {
															className: "truncate",
															children: e.library || "Untitled Library"
														})]
													})
												}, e.library_id)), s.length > 1 ? /* @__PURE__ */ (0, $.jsx)(L, {
													id: "new",
													textValue: "New Library",
													children: /* @__PURE__ */ (0, $.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, $.jsx)(je, { mark: "plus" }), /* @__PURE__ */ (0, $.jsx)("span", { children: "New Library" })]
													})
												}) : null]
											})
										}) : null
									] }), t.transport === "smb" ? /* @__PURE__ */ (0, $.jsxs)("div", {
										className: "flex w-full flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, $.jsxs)(wt, { children: [/* @__PURE__ */ (0, $.jsx)(Ct, {
												label: "SMB Username",
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, $.jsx)(M, {
													"aria-label": `SMB Username ${i + 1}`,
													value: t.smb_username || "",
													autoComplete: "off",
													onChange: (e) => r(i, { smb_username: e })
												})
											}), /* @__PURE__ */ (0, $.jsx)(Ct, {
												label: "SMB Password",
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, $.jsx)(M, {
													"aria-label": `SMB Password ${i + 1}`,
													type: "password",
													value: t.smb_password || "",
													autoComplete: "new-password",
													placeholder: t.smb_password_saved ? "Leave blank to keep the saved password" : "",
													onChange: (e) => r(i, { smb_password: e })
												})
											})] }),
											/* @__PURE__ */ (0, $.jsx)(v, {
												isSelected: t.smb_encrypt || !1,
												onChange: (e) => r(i, { smb_encrypt: e }),
												children: "Require SMB encryption"
											}),
											/* @__PURE__ */ (0, $.jsx)(v, {
												isSelected: t.smb_clear || !1,
												onChange: (e) => r(i, { smb_clear: e }),
												children: "Remove saved SMB credentials"
											}),
											/* @__PURE__ */ (0, $.jsx)(d, {
												className: "self-start",
												variant: "secondary",
												...G(T.busy === `smb-${i}`),
												onClick: () => void T.run(`smb-${i}`, (e) => W("/api/configuration/smb/test", t, "POST", e), (e) => x((t) => ({
													...t,
													[i]: {
														message: "Share is readable",
														directories: e.directories
													}
												})), (e) => x((t) => ({
													...t,
													[i]: {
														message: K(e),
														directories: []
													}
												}))),
												children: "Test Connection"
											}),
											b[i] ? /* @__PURE__ */ (0, $.jsx)(j, { children: b[i].message }) : null,
											b[i]?.directories.length ? /* @__PURE__ */ (0, $.jsx)(I, {
												"aria-label": `SMB subfolder ${i + 1}`,
												placeholder: "Open a Subfolder",
												selectedKey: null,
												onSelectionChange: (e) => {
													e && (r(i, { path: t.path.replace(/\/$/, "") + "/" + encodeURIComponent(String(e)) }), x((e) => ({
														...e,
														[i]: {
															message: "Test this subfolder",
															directories: []
														}
													})));
												},
												children: b[i].directories.map((e) => /* @__PURE__ */ (0, $.jsx)(L, {
													id: e,
													children: e
												}, e))
											}) : null,
											/* @__PURE__ */ (0, $.jsx)(j, { children: "Enter an address such as smb://server/share/folder. Access follows the share account permissions; organizing and deletion occur only when requested. Metadata and previews are stored in the Peach data folder." })
										]
									}) : null]
								}, i)), /* @__PURE__ */ (0, $.jsx)("div", {
									className: "flex",
									children: /* @__PURE__ */ (0, $.jsx)(d, {
										variant: "secondary",
										"aria-label": `Add a folder to ${p}`,
										onClick: () => {
											i(), r(n.length, {
												...$n(e),
												location: e.location,
												cost: e.cost
											});
										},
										children: "Add Folder"
									})
								})]
							})
						]
					}, e.library_id);
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(d, {
				variant: "secondary",
				className: "self-start",
				onClick: i,
				children: "Add Library"
			}),
			/* @__PURE__ */ (0, $.jsx)(j, { children: ie }),
			ae ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Ot, {}), /* @__PURE__ */ (0, $.jsx)(kn, {})] }) : null,
			oe.map((e) => /* @__PURE__ */ (0, $.jsxs)(j, { children: [
				"Not detected: ",
				e.name,
				". ",
				/* @__PURE__ */ (0, $.jsxs)(w, {
					href: e.download_url,
					children: ["Download ", e.name]
				})
			] }, e.name)),
			/* @__PURE__ */ (0, $.jsx)(v, {
				isSelected: f,
				onChange: p,
				children: "Scan and complete metadata after saving"
			}),
			_ ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "Not saved",
				children: _
			}) : null
		] }), /* @__PURE__ */ (0, $.jsx)(A, {
			status: "Peach will restart after saving.",
			children: /* @__PURE__ */ (0, $.jsx)(d, {
				type: "submit",
				...G(T.busy === "save"),
				children: "Save settings"
			})
		})]
	});
}
function or({ online: e }) {
	return /* @__PURE__ */ (0, $.jsx)(Nt, { online: e });
}
function sr({ data: e }) {
	let t = e.media_sources, n = Y();
	return t ? /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Mount Status",
		children: [
			/* @__PURE__ */ (0, $.jsx)(te, { children: t.map((e, t) => /* @__PURE__ */ (0, $.jsxs)(k, {
				term: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(je, { mark: jt(e.location) }), Yn(e.location)] }),
				children: [e.path || "No mount configured", /* @__PURE__ */ (0, $.jsx)(or, { online: e.online })]
			}, t)) }),
			n.error ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(C, { children: n.error })
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(A, { children: /* @__PURE__ */ (0, $.jsx)(d, {
				variant: "secondary",
				onClick: () => void n.run("refresh", (e) => Ge(e), (e) => q.setQueryData(h, e)),
				...G(n.busy === "refresh"),
				children: "Refresh Mount Status"
			}) })
		]
	}) : null;
}
// src/react/settings/service-preferences.tsx
var cr = [
	["off", "Off"],
	["precise", "Every 10 seconds"],
	["coarse", "Every 30 seconds"]
];
function lr({ epoch: e = 0, disabled: t = !1 }) {
	let n = X({
		queryKey: Me,
		queryFn: ({ signal: e }) => Ze(e),
		refetchOnMount: "always"
	}), r = xt(), i = r.reset;
	(0, Z.useEffect)(() => {
		i();
	}, [e, i]);
	let a = n.data, o = r.error || n.error;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
			label: "Timeline Preview",
			description: "Extract frames at the selected interval for videos on local drives only.",
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				id: "videoThumbnailSetting",
				children: /* @__PURE__ */ (0, $.jsx)(I, {
					"aria-label": "Thumbnail Capture Interval",
					selectedKey: a?.mode || "off",
					isDisabled: t || !a || n.isFetching || r.isPending,
					onSelectionChange: (e) => {
						e !== null && r.mutate(String(e));
					},
					children: cr.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(L, {
						id: e,
						children: t
					}, e))
				})
			})
		}) }),
		r.isPending || a?.status === "running" ? /* @__PURE__ */ (0, $.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(j, {
				role: "status",
				children: r.isPending ? "Saving…" : "Capturing thumbnails. View progress on the Activity page."
			})
		}) : null,
		o ? /* @__PURE__ */ (0, $.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(C, { children: K(o) })
		}) : null
	] });
}
function ur({ receipt: e }) {
	let t = Ie();
	(0, Z.useSyncExternalStore)(t.subscribe, t.version);
	let n = X({
		queryKey: we,
		queryFn: ({ signal: e }) => Xe(e),
		refetchOnMount: "always"
	}), r = bt(), i = n.data?.followInitialDays ?? t.value.followInitialDays, a = r.error || n.error;
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Followed Content",
		children: [/* @__PURE__ */ (0, $.jsxs)(P, { children: [
			/* @__PURE__ */ (0, $.jsx)(dr, {}),
			/* @__PURE__ */ (0, $.jsx)(fr, {}),
			/* @__PURE__ */ (0, $.jsx)(R, {
				label: "Initial Import Range",
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "followInitialDaysSetting",
					children: /* @__PURE__ */ (0, $.jsx)(I, {
						"aria-label": "Initial Import Range",
						selectedKey: String(i),
						isDisabled: n.isFetching || r.isPending,
						onSelectionChange: (n) => {
							n !== null && r.mutate({ followInitialDays: Number(n) }, { onSuccess: (n) => {
								typeof n.followInitialDays == "number" && (t.value.followInitialDays = n.followInitialDays), t.save(), e("Initial import range saved");
							} });
						},
						children: D.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(L, {
							id: e,
							children: t
						}, e))
					})
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(R, {
				label: "Profile Image Refresh",
				children: "Every 3 months"
			}),
			/* @__PURE__ */ (0, $.jsx)(R, {
				label: "Favicon Refresh",
				children: "Yearly"
			})
		] }), a ? /* @__PURE__ */ (0, $.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, $.jsx)(C, { children: K(a) })
		}) : null]
	});
}
function dr() {
	let e = X({
		queryKey: O,
		queryFn: ({ signal: e }) => Je(e),
		refetchOnMount: "always",
		refetchInterval: (e) => ut(e.state.data)
	}), t = yt(), n = e.data, r = (0, Z.useRef)(Le(Number(localStorage.getItem("peach.number.followScheduleSetting")), 15, 10080, 60)), [i, a] = (0, Z.useState)("60"), [o, s] = (0, Z.useState)(!1);
	(0, Z.useEffect)(() => {
		n?.enabled && (r.current = n.interval_minutes, a(String(n.interval_minutes)));
	}, [n]);
	let c = !n?.available || e.isFetching || t.isPending, l = () => {
		let e = Number(i);
		!Number.isInteger(e) || e < 15 || e > 10080 ? s(!0) : (s(!1), n?.enabled && !c && e !== n.interval_minutes && (r.current = e, localStorage.setItem("peach.number.followScheduleSetting", String(e)), t.mutate(e)));
	}, u = t.error || e.error;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(R, {
			label: "Automatically Check for Updates",
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				id: "followScheduleSetting",
				className: "flex min-h-9 min-w-0 flex-wrap items-center justify-end gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": "Automatically Check for Updates",
					isSelected: n?.enabled === !0,
					isDisabled: c,
					onChange: (e) => {
						localStorage.setItem("peach.number.followScheduleSetting", String(r.current)), t.mutate(e ? r.current : 0);
					}
				}), n?.enabled ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, $.jsx)(M, {
						type: "number",
						inputMode: "numeric",
						name: "follow-interval",
						autoComplete: "off",
						"aria-label": "Automatic Check Interval",
						className: "w-24",
						value: i,
						onChange: (e) => {
							a(e), s(!1);
						},
						onBlur: l,
						onKeyDown: (e) => {
							e.key === "Enter" && (e.preventDefault(), l());
						},
						isDisabled: c,
						isInvalid: o
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: "minutes"
					})]
				}) : null]
			})
		}),
		o ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(C, { children: "Enter a whole number from 15 to 10080 minutes." }) }) : null,
		t.isPending || n?.running ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(j, {
			role: "status",
			children: t.isPending ? "Saving…" : "Checking sources for updates…"
		}) }) : null,
		/* @__PURE__ */ (0, $.jsx)(pr, {
			kind: "follow",
			status: n,
			title: "Last Automatic Check Failed"
		}),
		u ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(C, { children: K(u) }) }) : null
	] });
}
function fr() {
	let e = X({
		queryKey: T,
		queryFn: ({ signal: e }) => qe(e),
		refetchOnMount: "always",
		refetchInterval: (e) => ut(e.state.data)
	}), t = e.data;
	if (!t) return e.isPending ? /* @__PURE__ */ (0, $.jsx)(R, {
		label: "Feed Refresh",
		children: /* @__PURE__ */ (0, $.jsx)("span", {
			"data-skeleton": !0,
			"aria-busy": "true",
			"aria-label": "Loading feed refresh interval",
			className: "block h-4 w-16 rounded-2lg bg-background-tertiary-default"
		})
	}) : null;
	let n = t.interval_minutes, r = n % 60 ? `Every ${n} minutes` : `Every ${n / 60} hours`;
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsx)(R, {
			label: "Feed Refresh",
			children: /* @__PURE__ */ (0, $.jsx)("span", {
				id: "feedScheduleSetting",
				children: t.available ? t.enabled ? r : "Off" : "Available only on the writable instance"
			})
		}),
		t.running ? /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(j, {
			role: "status",
			children: "Refreshing feeds…"
		}) }) : null,
		/* @__PURE__ */ (0, $.jsx)(pr, {
			kind: "feed",
			status: t,
			title: "Last Automatic Refresh Failed"
		})
	] });
}
function pr({ kind: e, status: t, title: n }) {
	let r = vt(e);
	if (!t?.enabled || t.running || !t.last_error) return null;
	let i = t.consecutive_failures ?? 0, a = tt(t.next_run_at), o = [i > 1 ? `Failed ${i} times in a row` : "", a ? `Next run: ${a}` : ""].filter(Boolean).join(" — "), s = [
		t.last_error,
		o,
		r.error ? `Retry failed: ${K(r.error)}` : ""
	].filter(Boolean).join("\n");
	return /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)(N, {
		tone: "error",
		title: n,
		action: /* @__PURE__ */ (0, $.jsx)(d, {
			variant: "secondary",
			size: "small",
			disabled: !t.available,
			...G(r.isPending),
			onClick: () => r.mutate(),
			children: "Retry Now"
		}),
		children: s
	}) });
}
// src/react/settings/media-processing-settings.tsx
function mr({ receipt: e }) {
	let t = X({
		queryKey: ue,
		queryFn: ({ signal: e }) => Ye(e)
	}), n = Y(), r = n.error || (t.error ? K(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Video Previews",
		children: [
			/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
				label: "Generate Video Previews",
				description: "Generate contact sheets and timeline previews for local videos. When off, duration and resolution are still detected according to import rules.",
				children: /* @__PURE__ */ (0, $.jsx)(H, {
					"aria-label": "Generate Video Previews",
					isSelected: !!t.data && !t.data.metadata_only,
					isDisabled: i,
					onChange: (t) => void n.run("save", (e) => W(de, { metadata_only: !t }, "POST", e), (t) => {
						q.setQueryData(ue, t), q.invalidateQueries({ queryKey: Me }), q.invalidateQueries({ queryKey: ae }), e(t.metadata_only ? "Video preview generation disabled" : "Video preview generation enabled");
					})
				})
			}) }),
			/* @__PURE__ */ (0, $.jsx)(lr, { disabled: !t.data || t.data.metadata_only || !!n.busy }),
			/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
				label: "Frame Extraction Decoder",
				description: "Used to generate covers, contact sheets, and timeline previews.",
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "previewAccelerationSetting",
					children: /* @__PURE__ */ (0, $.jsxs)(I, {
						"aria-label": "Frame Extraction Decoder",
						selectedKey: t.data?.preview_acceleration || "auto",
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("preview_acceleration", (e) => W(de, { preview_acceleration: String(t) }, "POST", e), (t) => {
								q.setQueryData(ue, t), e("Frame extraction decoder saved");
							});
						},
						children: [/* @__PURE__ */ (0, $.jsx)(L, {
							id: "auto",
							children: "Automatic (Prefer Hardware)"
						}), /* @__PURE__ */ (0, $.jsx)(L, {
							id: "software",
							children: "Software Decoding"
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					role: "status",
					children: "Saving…"
				})
			}) : null,
			r ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(C, { children: r })
			}) : null
		]
	});
}
function hr({ receipt: e }) {
	let t = X({
		queryKey: ue,
		queryFn: ({ signal: e }) => Ye(e)
	}), n = Y(), r = n.error || (t.error ? K(t.error) : "");
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Video Playback",
		children: [
			/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
				label: "Transcoding Method",
				description: "Used to transcode video during playback.",
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					id: "playbackAccelerationSetting",
					children: /* @__PURE__ */ (0, $.jsxs)(I, {
						"aria-label": "Transcoding Method",
						selectedKey: t.data?.playback_acceleration || "auto",
						isDisabled: !t.data || t.isFetching || !!n.busy,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_acceleration", (e) => W(de, { playback_acceleration: String(t) }, "POST", e), (t) => {
								q.setQueryData(ue, t), e("Transcoding method saved");
							});
						},
						children: [/* @__PURE__ */ (0, $.jsx)(L, {
							id: "auto",
							children: "Automatic (Prefer Hardware)"
						}), /* @__PURE__ */ (0, $.jsx)(L, {
							id: "software",
							children: "Software Codecs"
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(j, {
					role: "status",
					children: "Saving…"
				})
			}) : null,
			r ? /* @__PURE__ */ (0, $.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, $.jsx)(C, { children: r })
			}) : null
		]
	});
}
// src/react/boardui/components/base/textarea/textarea.tsx
var gr = pt({
	field: "relative flex w-full flex-col rounded-2lg bg-background-tertiary-default text-foreground-icon-tertiary ring-2 ring-inset ring-transparent transition-[background-color,box-shadow,color] duration-[var(--input-transition-ms)] ease",
	fieldSize: {
		medium: "p-2",
		small: "px-1.5 py-2"
	},
	textarea: "block w-full min-w-0 bg-transparent border-0 outline-none m-0 p-0 px-1 font-sans text-body-regular text-text-primary placeholder:text-text-tertiary focus:placeholder:text-text-primary disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text disabled:cursor-not-allowed aria-invalid:placeholder:text-text-error-placeholder",
	resize: {
		none: "resize-none",
		vertical: "resize-y"
	},
	footer: "flex w-full items-start justify-between gap-3",
	count: "ms-auto shrink-0 pt-px text-caption-1-medium text-text-tertiary tabular-nums"
}), _r = 20;
function vr({ size: e, rows: n = 3, autoResize: r = !1, maxRows: a, resize: o = "vertical", fieldClassName: s, className: c, ref: l, groupRef: u, onInput: d, ...f }) {
	let p = (0, Z.useContext)(Pe), m = e ?? p.size ?? "medium", h = (0, Z.useRef)(null), g = (e) => {
		h.current = e, typeof l == "function" ? l(e) : l && (l.current = e);
	}, _ = () => {
		let e = h.current;
		if (!e) return;
		if (!r) {
			e.style.height = "", e.style.maxHeight = "", e.style.overflowY = "";
			return;
		}
		let t = parseFloat(window.getComputedStyle(e).lineHeight) || _r, i = a ? a * t : Infinity;
		e.style.height = "0px";
		let o = Math.max(e.scrollHeight, n * t);
		e.style.height = `${Math.min(o, i)}px`, e.style.maxHeight = a ? `${i}px` : "", e.style.overflowY = o > i ? "auto" : "hidden";
	};
	return (0, Z.useLayoutEffect)(_), /* @__PURE__ */ (0, $.jsx)(t, {
		ref: u,
		className: ({ isFocusWithin: e, isHovered: t, isDisabled: n, isInvalid: r }) => We(gr.field, gr.fieldSize[m], t && !e && !n && !r && "ring-border-button-hover", e && !n && !r && "ring-border-button-active", n && "bg-input-disabled-background text-input-disabled-foreground", r && "bg-background-tertiary-error text-foreground-icon-error", p.fieldClassName, s),
		children: /* @__PURE__ */ (0, $.jsx)(i, {
			ref: g,
			rows: n,
			...f,
			onInput: (e) => {
				_(), d?.(e);
			},
			className: We(gr.textarea, gr.resize[r ? "none" : o], p.inputClassName, c)
		})
	});
}
vr.displayName = "TextareaBase";
function yr({ label: e, hint: t, tooltip: n, placeholder: r, rows: i, autoResize: a, maxRows: o, resize: s, maxLength: c, showCount: l = !1, fieldClassName: u, ref: d, groupRef: f, className: p, value: m, defaultValue: h, onChange: g, ..._ }) {
	let [v, y] = (0, Z.useState)(() => (h ?? "").length), b = m === void 0 ? v : m.length;
	return /* @__PURE__ */ (0, $.jsx)(Ne, {
		..._,
		value: m,
		defaultValue: h,
		onChange: (e) => {
			l && m === void 0 && y(e.length), g?.(e);
		},
		className: p,
		"aria-label": _["aria-label"] ?? (!e && typeof r == "string" ? r : void 0),
		children: ({ isRequired: p, isInvalid: m }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			e && /* @__PURE__ */ (0, $.jsx)(oe, {
				isRequired: p,
				isInvalid: m,
				tooltip: n,
				children: e
			}),
			/* @__PURE__ */ (0, $.jsx)(vr, {
				ref: d,
				groupRef: f,
				placeholder: r,
				rows: i,
				autoResize: a,
				maxRows: o,
				resize: s,
				maxLength: c,
				fieldClassName: u
			}),
			(t || l) && /* @__PURE__ */ (0, $.jsxs)("div", {
				className: gr.footer,
				children: [t && /* @__PURE__ */ (0, $.jsx)(re, {
					isInvalid: m,
					children: t
				}), l && /* @__PURE__ */ (0, $.jsx)("span", {
					className: We(gr.count, m && "text-text-error-primary"),
					children: c ? `${b}/${c}` : b
				})]
			})
		] })
	});
}
yr.displayName = "Textarea";
// src/react/settings/code-pattern-settings.tsx
var br = "^\\+{3}\\s*(?<code>FC2-PPV-\\d+)\n\\[(?<code>[A-Z]+-\\d+)\\]";
function xr({ receipt: e }) {
	let t = X({
		queryKey: we,
		queryFn: ({ signal: e }) => Xe(e)
	}), [n, r] = (0, Z.useState)(null), i = Y(), a = n ?? (t.data?.codePatterns ?? []).join("\n"), o = i.error || (t.error ? K(t.error) : "");
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Catalog Code Recognition Rules",
		onSubmit: (t) => {
			t.preventDefault();
			let n = a.split("\n").map((e) => e.trim()).filter(Boolean);
			i.run("save", (e) => W(Te, { codePatterns: n }, "POST", e), (t) => {
				q.setQueryData(we, t), r(null), e("Settings saved");
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(B, { children: [/* @__PURE__ */ (0, $.jsx)(j, { children: "When built-in rules cannot identify a catalog code, use these rules to extract it from the filename. Enter one regular expression per line. Put the code in (?<code>…); without a named group, the first capture group is used. Rules apply to uncoded videos the next time they are processed." }), /* @__PURE__ */ (0, $.jsx)(yr, {
			id: "codePatternSetting",
			"aria-label": "Catalog Code Recognition Rules",
			rows: 3,
			autoResize: !0,
			maxRows: 12,
			spellCheck: "false",
			autoComplete: "off",
			placeholder: br,
			value: a,
			isDisabled: !t.data,
			isInvalid: !!o,
			hint: o || void 0,
			onChange: r
		})] }), /* @__PURE__ */ (0, $.jsx)(A, { children: /* @__PURE__ */ (0, $.jsx)(d, {
			type: "submit",
			...G(i.busy === "save"),
			children: "Save settings"
		}) })]
	});
}
// src/react/settings/password-pair.tsx
function Sr({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(M, {
		id: "access-password",
		type: "password",
		label: e,
		autoComplete: "new-password",
		maxLength: 256,
		value: t,
		onChange: r,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && !!o,
		hint: a ? s : o || s
	}), /* @__PURE__ */ (0, $.jsx)(M, {
		id: "access-confirm",
		type: "password",
		label: "Confirm Access Password",
		autoComplete: "new-password",
		maxLength: 256,
		value: n,
		onChange: i,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && (!!c || l),
		hint: a ? void 0 : c
	})] });
}
// src/react/settings/access-settings.tsx
var Cr = {
	legacy: "A system-generated access code is currently in use. Set your own password or turn off sign-in requirements.",
	locked: "Access settings could not be read. Check the configuration file on this computer.",
	password: "A password is set. New devices must sign in; selecting “Stay signed in” keeps the session for 30 days."
};
function wr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(""), [f, p] = (0, Z.useState)(!1), [m, h] = (0, Z.useState)({}), g = (0, Z.useRef)(null), _ = Y(), y = (e) => {
		e.preventDefault();
		let d = {};
		n.mode === "password" && !i && (d.current_password = "Enter the current access password"), f || ((o.length < 8 || o.length > 256) && (d.password = "The access password must be 8–256 characters."), o !== c && (d.confirmation = "The passwords do not match.")), h(d), Object.keys(d).length ? requestAnimationFrame(() => g.current?.querySelector("input[aria-invalid=\"true\"]")?.focus()) : _.run("save", (e) => W("/api/configuration/access", {
			revision: n.revision,
			action: f ? "disable" : "set",
			confirm_disable: f,
			current_password: i,
			password: f ? "" : o,
			confirmation: f ? "" : c
		}, "POST", e), (e) => {
			r(e), a(""), s(""), l(""), p(!1), h({}), t(e.mode === "open" ? "Access password disabled" : "Settings saved");
		}, (e) => {
			let t = e instanceof u ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? h(n) : _.setError(K(e));
		});
	}, b = Cr[n.mode], x = n.mode !== "locked";
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Access Password",
		onSubmit: y,
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			ref: g,
			children: /* @__PURE__ */ (0, $.jsxs)(B, { children: [
				b ? /* @__PURE__ */ (0, $.jsx)(j, { children: b }) : null,
				n.mode === "open" ? /* @__PURE__ */ (0, $.jsx)(N, {
					tone: "warning",
					title: "No Access Password",
					children: "Any device that can connect to Peach can open the library without signing in."
				}) : null,
				n.mode === "password" || n.mode === "legacy" ? /* @__PURE__ */ (0, $.jsx)(v, {
					isSelected: f,
					onChange: p,
					children: "Disable Access Password"
				}) : null,
				n.mode === "password" ? /* @__PURE__ */ (0, $.jsx)(M, {
					id: "access-current",
					type: "password",
					label: "Current Access Password",
					autoComplete: "current-password",
					maxLength: 256,
					value: i,
					onChange: a,
					isRequired: !0,
					validationBehavior: "aria",
					isInvalid: !!m.current_password,
					hint: m.current_password
				}) : null,
				x && !f ? /* @__PURE__ */ (0, $.jsx)(Sr, {
					label: n.mode === "password" ? "New Access Password" : "Set Access Password",
					password: o,
					confirmation: c,
					onPassword: s,
					onConfirmation: l,
					passwordError: m.password,
					confirmationError: m.confirmation,
					passwordHint: "At least 8 characters. Other devices must sign in again after saving."
				}) : null,
				f ? /* @__PURE__ */ (0, $.jsx)(N, {
					tone: "warning",
					title: "Access Scope",
					children: "After saving, any device that can connect to Peach will have direct access to the library."
				}) : null,
				_.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: _.error }) : null
			] })
		}), x ? /* @__PURE__ */ (0, $.jsx)(A, { children: /* @__PURE__ */ (0, $.jsx)(d, {
			type: "submit",
			...G(_.busy === "save"),
			children: "Save settings"
		}) }) : null]
	});
}
// src/react/components/configuration-fields.tsx
function Tr({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: o, children: s }) {
	let l = `${e}-label`;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, $.jsx)(oe, {
				id: l,
				elementType: "span",
				children: t
			}),
			/* @__PURE__ */ (0, $.jsx)(De, {
				id: e,
				"aria-labelledby": l,
				orientation: "horizontal",
				className: Ce,
				value: n,
				onChange: r,
				isDisabled: a,
				isInvalid: o,
				children: i.map((e) => /* @__PURE__ */ (0, $.jsx)(c, {
					value: e.value,
					className: Se,
					children: e.label
				}, e.value))
			}),
			s
		]
	});
}
function Er({ prefix: e, suffix: t, ...n }) {
	let r = () => /* @__PURE__ */ (0, $.jsx)("span", {
		className: "shrink-0 pr-1 text-body-regular text-text-secondary",
		children: t
	});
	return /* @__PURE__ */ (0, $.jsx)(M, {
		...n,
		leadingAddon: e ? /* @__PURE__ */ (0, $.jsx)("span", {
			className: "shrink-0 pl-1 text-body-regular text-text-secondary",
			children: e
		}) : void 0,
		trailingIcon: t ? r : void 0
	});
}
// src/react/settings/port-settings.tsx
var Dr = [{
	value: "0.0.0.0",
	label: "Devices on the Same Network"
}, {
	value: "127.0.0.1",
	label: "This Computer Only"
}];
function Or({ data: e, receipt: t }) {
	let n = e.network, r = n ? n.editable : e.editable && e.port_editable !== !1, [i, a] = (0, Z.useState)(n?.host ?? "127.0.0.1"), [o, s] = (0, Z.useState)(n?.mdns_name ?? "peach"), [c, l] = (0, Z.useState)(String(e.port)), [f, p] = (0, Z.useState)({}), [m, h] = (0, Z.useState)(null), _ = Y();
	return (0, Z.useEffect)(() => {
		if (!m) return;
		let e = setTimeout(() => location.assign(m.url), En);
		return () => clearTimeout(e);
	}, [m]), m ? /* @__PURE__ */ (0, $.jsx)(F, {
		title: "Access URLs",
		children: /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsxs)(N, {
			tone: "success",
			title: "Settings Saved",
			children: ["Peach is restarting.", /* @__PURE__ */ (0, $.jsx)(se, {
				href: m.url,
				size: "small",
				children: "Back to Network & Access"
			})]
		}) })
	}) : /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Access URLs",
		onSubmit: r ? (r) => {
			r.preventDefault(), p({}), _.run("save", (t) => W(g, {
				revision: e.revision,
				media_dirs: e.media_dirs,
				...e.media_sources ? { media_sources: e.media_sources } : {},
				port: c,
				scan_now: !1,
				...n?.editable ? {
					host: i,
					...i === "0.0.0.0" ? { mdns_name: o } : {}
				} : {}
			}, "POST", t), (e) => {
				h({ url: new URL("/settings/network", e.url).href }), t("Settings saved");
			}, (e) => {
				let t = e instanceof u && e.status === 400 ? e.body?.errors : null;
				t && (t.port || t.host || t.mdns_name) ? p(t) : _.setError(K(e));
			});
		} : void 0,
		children: [/* @__PURE__ */ (0, $.jsxs)(B, { children: [
			n ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(kr, {
				label: "Local URL",
				value: n.local_url,
				receipt: t
			}), n.lan_url || n.ip_url ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
				/* @__PURE__ */ (0, $.jsx)(kr, {
					label: "Phone URL",
					value: n.lan_url || n.ip_url,
					receipt: t
				}),
				n.lan_url && n.ip_url ? /* @__PURE__ */ (0, $.jsx)(kr, {
					label: "Fallback IP Address",
					value: n.ip_url,
					receipt: t
				}) : null,
				/* @__PURE__ */ (0, $.jsxs)(j, { children: ["Connect your phone and computer to the same Wi-Fi.", n.ip_url && n.lan_url ? "If the named URL does not open, try the fallback IP address." : ""] })
			] }) : /* @__PURE__ */ (0, $.jsx)(j, { children: n.scope === "local" ? "Access is currently limited to this computer, so phones cannot connect." : "The local network URL is unavailable. Check this computer’s network connection and service startup settings." })] }) : null,
			r ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [n?.editable ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Tr, {
				id: "configHost",
				label: "Who Can Access",
				value: i,
				onChange: a,
				options: Dr,
				isDisabled: !!_.busy,
				isInvalid: !!f.host,
				children: f.host ? /* @__PURE__ */ (0, $.jsx)(C, { children: f.host }) : null
			}), i === "0.0.0.0" ? /* @__PURE__ */ (0, $.jsx)(Er, {
				id: "configMdnsName",
				label: "Local Network URL",
				value: o,
				onChange: s,
				prefix: n.local_url.startsWith("https:") ? "https://" : "http://",
				suffix: ".local",
				autoComplete: "off",
				spellCheck: "false",
				maxLength: 63,
				isDisabled: !!_.busy,
				validationBehavior: "aria",
				isInvalid: !!f.mdns_name,
				hint: f.mdns_name || void 0
			}) : null] }) : null, /* @__PURE__ */ (0, $.jsx)(Er, {
				id: "configPort",
				label: "Port",
				prefix: "localhost:",
				inputMode: "numeric",
				value: c,
				onChange: l,
				isDisabled: !!_.busy,
				validationBehavior: "aria",
				isInvalid: !!f.port,
				hint: f.port
			})] }) : /* @__PURE__ */ (0, $.jsx)(j, { children: e.notice || "Access scope, hostname, and port are managed by the service startup configuration." }),
			n?.editable && i === "0.0.0.0" && n.scope === "local" ? /* @__PURE__ */ (0, $.jsx)(j, { children: "Save and restart to show the phone URL. You can set an access password below." }) : null,
			_.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "Not saved",
				children: _.error
			}) : null
		] }), r ? /* @__PURE__ */ (0, $.jsx)(A, {
			status: "Peach will restart after saving and redirect to the new URL.",
			children: /* @__PURE__ */ (0, $.jsx)(d, {
				type: "submit",
				...G(_.busy === "save"),
				children: "Save settings"
			})
		}) : null]
	});
}
function kr({ label: e, value: t, receipt: n }) {
	let r = Y();
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)(M, {
				className: "min-w-0 flex-1",
				label: e,
				value: t,
				isReadOnly: !0,
				autoComplete: "off"
			}), /* @__PURE__ */ (0, $.jsx)(d, {
				variant: "secondary",
				"aria-label": `Copy ${e}`,
				onClick: () => void r.run("copy", () => navigator.clipboard.writeText(t), () => n("URL copied")),
				children: "Copy URL"
			})]
		}), r.error ? /* @__PURE__ */ (0, $.jsx)(j, {
			role: "status",
			children: "Copy failed. Select the URL and copy it manually."
		}) : null]
	});
}
// src/react/settings/peach-proxy-fields.tsx
var Ar = [
	["environment", "Use Environment"],
	["direct", "Direct"],
	["proxy", "Custom"]
];
function jr({ mode: e, onChange: t, labelledBy: n }) {
	return /* @__PURE__ */ (0, $.jsx)(I, {
		"aria-label": n ? void 0 : "Connection Method",
		"aria-labelledby": n,
		selectedKey: e,
		onSelectionChange: (e) => {
			e !== null && t(String(e));
		},
		children: Ar.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(L, {
			id: e,
			children: t
		}, e))
	});
}
function Mr({ id: e, value: t, onChange: n, saved: r = !1, error: i }) {
	return /* @__PURE__ */ (0, $.jsx)(M, {
		id: e,
		type: "password",
		label: "Proxy URL",
		autoComplete: "off",
		spellCheck: "false",
		value: t,
		onChange: n,
		placeholder: r ? "Saved; leave blank to keep it" : "http://127.0.0.1:7890",
		validationBehavior: "aria",
		isInvalid: !!i,
		hint: i
	});
}
// src/react/settings/tunnel-settings.tsx
var Nr = 2e3, Pr = [["quick", "Quick Link"], ["named", "Named Tunnel"]], Fr = {
	quick: "For temporary previews. The random address changes after a restart. Set an access password before starting.",
	named: "Uses the fixed domain configured in Cloudflare. Set an access password before starting."
};
function Ir({ revision: e, initial: t, receipt: n }) {
	let [r, i] = (0, Z.useState)(t), [a, o] = (0, Z.useState)(e), [s, l] = (0, Z.useState)(t.mode), [f, p] = (0, Z.useState)(t.hostname), [m, g] = (0, Z.useState)(""), [_, v] = (0, Z.useState)({}), y = Y(), b = r.state === "starting" || r.state === "running", x = r.named_available && s === "named";
	(0, Z.useEffect)(() => {
		if (r.state !== "starting") return;
		let e = new AbortController(), t = window.setInterval(() => {
			Ge(e.signal).then((t) => {
				!e.signal.aborted && t.tunnel && (q.setQueryData(h, t), i(t.tunnel), o(t.revision));
			}).catch(() => void 0);
		}, Nr);
		return () => {
			e.abort(), window.clearInterval(t);
		};
	}, [r.state]);
	let S = (e, t, n) => {
		v({}), y.run(e, (e) => W("/api/configuration/tunnel", {
			revision: a,
			enabled: t,
			mode: s,
			hostname: f,
			token: m
		}, "POST", e), (e) => {
			i(e), o(e.revision), l(e.mode), p(e.hostname), g(""), n(e);
		}, (e) => {
			let t = e instanceof u ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? v(n) : y.setError(K(e));
		});
	};
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		id: "tunnel",
		title: "Cloudflare Public Access",
		onSubmit: (e) => {
			e.preventDefault(), S("save", b, () => n("Settings saved"));
		},
		aside: /* @__PURE__ */ (0, $.jsx)(V, {
			tone: r.error ? "error" : b ? "progress" : "neutral",
			children: r.error ? "Connection Failed" : r.state === "running" ? "Running" : r.state === "starting" ? "Connecting" : "Stopped"
		}),
		children: [/* @__PURE__ */ (0, $.jsxs)(B, { children: [
			r.named_available ? /* @__PURE__ */ (0, $.jsx)(De, {
				"aria-label": "Public access type",
				value: s,
				isDisabled: b,
				onChange: (e) => l(e),
				className: Ce,
				children: Pr.map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(c, {
					value: e,
					className: Se,
					children: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(j, { children: Fr[x ? "named" : "quick"] }),
			x ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(M, {
				id: "tunnel-hostname",
				label: "Public Hostname",
				autoComplete: "off",
				maxLength: 253,
				value: f,
				onChange: p,
				isDisabled: b,
				validationBehavior: "aria",
				isInvalid: !!_.hostname,
				hint: _.hostname || "The hostname in Cloudflare Zero Trust that points to this computer."
			}), /* @__PURE__ */ (0, $.jsx)(M, {
				id: "tunnel-token",
				type: "password",
				label: "Tunnel Token",
				autoComplete: "off",
				maxLength: 2048,
				value: m,
				onChange: g,
				isDisabled: b,
				validationBehavior: "aria",
				hint: r.token_set ? "Saved; leave blank to keep it." : "Copy it from the tunnel details page in Cloudflare Zero Trust."
			})] }) : null,
			r.available ? null : /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "warning",
				title: "cloudflared Not Found",
				children: "Install the official cloudflared, or specify its path with tunnel.binary in the settings file or PEACH_CLOUDFLARED."
			}),
			r.state === "running" && r.url ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "info",
				title: "Public URL",
				children: /* @__PURE__ */ (0, $.jsx)(w, {
					href: r.url,
					children: r.url
				})
			}) : null,
			r.state === "starting" ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "info",
				title: "Connecting",
				children: "Waiting for cloudflared to connect to the Cloudflare edge."
			}) : null,
			r.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: r.error }) : null,
			y.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: y.error }) : null
		] }), /* @__PURE__ */ (0, $.jsxs)(A, {
			status: r.enabled ? "Automatically restored when Peach restarts." : void 0,
			children: [/* @__PURE__ */ (0, $.jsx)(d, {
				variant: r.named_available ? "secondary" : "primary",
				onClick: () => S("toggle", !b, (e) => n(e.enabled ? "Public access started" : "Public access stopped")),
				...G(y.busy === "toggle"),
				children: b ? "Stop Public Access" : "Start Public Access"
			}), r.named_available ? /* @__PURE__ */ (0, $.jsx)(d, {
				type: "submit",
				...G(y.busy === "save"),
				children: "Save settings"
			}) : null]
		})]
	});
}
// src/react/settings/network-settings.tsx
function Lr({ data: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		...Q(n),
		children: [
			r,
			e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources ? /* @__PURE__ */ (0, $.jsx)(Or, {
				data: e,
				receipt: t
			}) : null,
			e.access ? /* @__PURE__ */ (0, $.jsx)(wr, {
				initial: e.access,
				receipt: t
			}) : null,
			e.tunnel ? /* @__PURE__ */ (0, $.jsx)(Ir, {
				revision: e.revision,
				initial: e.tunnel,
				receipt: t
			}) : null,
			e.peach_proxy ? /* @__PURE__ */ (0, $.jsx)(Rr, {
				initial: e.peach_proxy,
				receipt: t
			}) : null
		]
	});
}
function Rr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.mode), [o, s] = (0, Z.useState)(""), c = Y();
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		id: "peachProxy",
		title: "Peach Proxy",
		onSubmit: (e) => {
			e.preventDefault(), c.run("save", (e) => W("/api/configuration/peach-proxy", {
				mode: i,
				proxy: o
			}, "POST", e), (e) => {
				r(e), s(""), t("Settings saved");
			});
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)(P, { children: /* @__PURE__ */ (0, $.jsx)(R, {
				label: "Connection Method",
				children: /* @__PURE__ */ (0, $.jsx)(jr, {
					mode: i,
					onChange: a
				})
			}) }),
			i === "proxy" || n.needs_selection || c.error ? /* @__PURE__ */ (0, $.jsxs)(B, {
				divided: !0,
				children: [
					i === "proxy" ? /* @__PURE__ */ (0, $.jsx)(Mr, {
						id: "peachProxyAddress",
						value: o,
						onChange: s,
						saved: n.proxy_saved
					}) : null,
					n.needs_selection ? /* @__PURE__ */ (0, $.jsx)(N, {
						tone: "warning",
						title: "Choose a Connection Method",
						children: "Existing sources use different proxy addresses. Choose a shared connection method."
					}) : null,
					c.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: c.error }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(A, { children: /* @__PURE__ */ (0, $.jsx)(d, {
				type: "submit",
				...G(c.busy === "save"),
				children: "Save settings"
			}) })
		]
	});
}
// src/react/follow-manage/credentials.tsx
var zr = "将清除这个来源在本机和共享副本中的登录凭据。", Br = "其他系统用户可以读取此凭据文件。请在运行 Peach 的 Mac 或 Linux 电脑上，将文件权限设为仅当前用户可读写（0600）。";
function Vr(e, t) {
	return (e.shared_fields || []).includes(t) ? "来自共享，留空表示不改" : e.fields.includes(t) ? "已保存，留空表示不改" : "未填写";
}
function Hr({ row: e }) {
	if (He(e)) return /* @__PURE__ */ (0, $.jsx)(y, {
		variant: "caption",
		color: "lime",
		children: "已配置"
	});
	let t = e.requirement === "required" ? "yellow" : e.requirement === "blocked" ? "rose" : "neutral";
	return /* @__PURE__ */ (0, $.jsx)(y, {
		variant: "caption",
		color: t,
		children: _[e.requirement] || ""
	});
}
function Ur({ row: e, readOnly: t, toast: n }) {
	let [r, i] = (0, Z.useState)({}), [a, o] = (0, Z.useState)(""), s = He(e), c = _t({
		mutationFn: (t) => lt(e.provider, t),
		onSuccess: (e, t) => {
			e.note ? o(e.note) : (o(""), i({}), q.invalidateQueries({
				queryKey: E,
				exact: !0
			}), n(Object.keys(t).length ? "已保存来源凭据" : "已清除来源凭据"));
		},
		onError: (e) => o(K(e))
	}), l = () => {
		let e = Object.fromEntries(Object.entries(r).map(([e, t]) => [e, t.trim()]).filter(([, e]) => e));
		Object.keys(e).length ? c.mutate(e) : o("没有填写内容");
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, $.jsxs)(j, { children: [e.why, e.where ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [" ", /* @__PURE__ */ (0, $.jsx)(w, {
				href: e.where,
				children: "获取凭据"
			})] }) : null] }),
			e.howto ? /* @__PURE__ */ (0, $.jsx)(j, { children: e.howto }) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "flex w-full flex-col gap-3",
				children: (e.needs || []).map((n) => /* @__PURE__ */ (0, $.jsx)(M, {
					type: "password",
					label: n,
					placeholder: Vr(e, n),
					autoComplete: "off",
					spellCheck: "false",
					isDisabled: t,
					value: r[n] || "",
					onChange: (e) => i({
						...r,
						[n]: e
					}),
					className: "w-full min-w-0"
				}, n))
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [s ? /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "danger",
					disabled: t,
					...G(c.isPending),
					onClick: () => void Ve({
						title: "清除来源凭据",
						body: zr,
						confirmLabel: "清除来源凭据",
						danger: !0,
						onConfirm: () => c.mutateAsync({})
					}),
					children: "清除"
				}) : null, /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "primary",
					disabled: t,
					...G(c.isPending),
					onClick: l,
					children: "保存配置"
				})]
			}),
			a ? /* @__PURE__ */ (0, $.jsx)(C, { children: a }) : null,
			(e.shared_fields || []).length ? /* @__PURE__ */ (0, $.jsx)(j, { children: `${e.shared_fields.join("、")} 使用共享副本中的登录信息，本机没有单独保存。清除时，本机和共享副本中的登录信息都会删除。` }) : null,
			e.path ? /* @__PURE__ */ (0, $.jsx)(b, {
				summary: "凭据文件",
				children: /* @__PURE__ */ (0, $.jsx)(ye, {
					path: e.path,
					className: "font-mono text-caption-1-regular text-text-tertiary",
					onRevealed: n
				})
			}) : null
		]
	});
}
function Wr({ row: e, readOnly: t, toast: n }) {
	let r = /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "inline-flex size-3.5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ (0, $.jsx)(Pt, { provider: e.provider })
			}),
			/* @__PURE__ */ (0, $.jsx)("b", {
				className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
				children: e.provider_label
			}),
			/* @__PURE__ */ (0, $.jsx)(Hr, { row: e }),
			e.missing.map((e) => /* @__PURE__ */ (0, $.jsx)(y, {
				variant: "caption",
				color: "rose",
				children: `缺 ${e}`
			}, e))
		]
	});
	return e.requirement === "none" || e.requirement === "blocked" ? /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [r, e.requirement === "blocked" ? /* @__PURE__ */ (0, $.jsx)(j, { children: e.why }) : null]
	}) : /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [
			r,
			/* @__PURE__ */ (0, $.jsx)(b, {
				summary: He(e) ? "修改凭据" : "填写凭据",
				defaultOpen: e.requirement === "required" && !He(e),
				children: /* @__PURE__ */ (0, $.jsx)(Ur, {
					row: e,
					readOnly: t,
					toast: n
				})
			}),
			e.world_readable ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "凭据文件权限过宽",
				children: Br
			}) : null
		]
	});
}
function Gr({ data: e, readOnly: t, toast: n, embedded: r = !1 }) {
	let i = e.providers || [], a = i.filter((e) => e.requirement === "required" && !He(e));
	if ((0, Z.useEffect)(() => {
		J("credentials", { done: i.filter(He).map((e) => e.provider) });
	}, [e]), !i.length) return /* @__PURE__ */ (0, $.jsx)(ee, {
		size: "compact",
		icon: Be,
		title: "没有可配置的来源",
		children: "已接入的站点及其凭据状态会显示在这里。"
	});
	let o = a.length ? /* @__PURE__ */ (0, $.jsx)("span", {
		className: "text-body-2-regular text-text-error-primary",
		children: `${a.length} 个待配置`
	}) : null, s = /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: [
		{
			title: "可配置凭据",
			rows: i.filter((e) => e.requirement !== "none" && e.requirement !== "blocked")
		},
		{
			title: "不需要凭据",
			rows: i.filter((e) => e.requirement === "none")
		},
		{
			title: "暂不支持",
			rows: i.filter((e) => e.requirement === "blocked")
		}
	].filter((e) => e.rows.length).map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": e.title,
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, $.jsx)("h4", {
			className: "text-body-medium text-text-secondary",
			children: e.title
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: Re({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
			children: e.rows.map((e) => /* @__PURE__ */ (0, $.jsx)(Wr, {
				row: e,
				readOnly: t,
				toast: n
			}, e.provider))
		})]
	}, e.title)) });
	return r ? /* @__PURE__ */ (0, $.jsx)(F, {
		title: "来源凭据",
		aside: o || void 0,
		children: /* @__PURE__ */ (0, $.jsx)(B, { children: /* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-col gap-4",
			children: s
		}) })
	}) : /* @__PURE__ */ (0, $.jsxs)("div", {
		className: Re({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "mr-auto text-title-2-medium text-text-primary",
				children: "来源凭据"
			}), o]
		}), s]
	});
}
// src/react/settings/entry-links-settings.tsx
function Kr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.sites), i = Y(), a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		host: t
	} : n));
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Title Information Sites",
		onSubmit: (e) => {
			e.preventDefault();
			let a = { sites: Object.fromEntries(n.map((e) => [e.key, { host: e.host }])) };
			i.run("save", (e) => W("/api/configuration/entry-links", a, "POST", e), (e) => {
				r(e.sites), t("Settings saved");
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(B, { children: [
			/* @__PURE__ */ (0, $.jsx)(j, { children: x }),
			n.map((e) => /* @__PURE__ */ (0, $.jsx)(M, {
				id: `entry-link-${e.key}`,
				label: /* @__PURE__ */ (0, $.jsx)(Ae, {
					site: e.key,
					label: `${e.label} URL`
				}),
				autoComplete: "off",
				maxLength: 100,
				value: e.host,
				placeholder: e.default_host,
				onChange: (t) => a(e.key, t),
				validationBehavior: "aria",
				hint: S
			}, e.key)),
			i.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: i.error }) : null
		] }), /* @__PURE__ */ (0, $.jsx)(A, { children: /* @__PURE__ */ (0, $.jsx)(d, {
			type: "submit",
			...G(i.busy === "save"),
			children: "Save settings"
		}) })]
	});
}
// src/react/settings/indexer-settings.tsx
var qr = "/api/configuration/indexers";
function Jr({ receipt: e }) {
	let t = X({
		queryKey: ["indexers"],
		queryFn: ({ signal: e }) => U(qr, e),
		refetchOnMount: "always"
	});
	return t.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: K(t.error) }) : t.isFetching ? /* @__PURE__ */ (0, $.jsx)(Ee, {
		label: "Loading resource search settings",
		html: $e
	}) : t.data ? /* @__PURE__ */ (0, $.jsx)(Zr, {
		initial: t.data,
		receipt: e
	}) : null;
}
function Yr(e) {
	try {
		return new globalThis.URL(e).host;
	} catch {
		return e;
	}
}
function Xr({ row: e, index: t }) {
	let n = [
		e.url ? Yr(e.url) : "No URL",
		e.enabled ? "Enabled" : "Disabled",
		e.api_key_set && !e.clear_api_key ? "API key saved" : e.api_key ? "API key not saved" : "No API key"
	];
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-baseline gap-3",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "shrink-0 text-text-primary",
			children: e.name || `Indexer ${t + 1}`
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "truncate text-body-2-regular text-text-secondary",
			children: n.join(" · ")
		})]
	});
}
function Zr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.indexers), i = Y();
	(0, Z.useEffect)(() => {
		J("indexers", { open: e.indexers.map((e) => !e.url) });
	}, [e]);
	let a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		...t
	} : n));
	return /* @__PURE__ */ (0, $.jsxs)(F, {
		title: "Resource Search",
		onSubmit: (e) => {
			e.preventDefault(), i.run("save", (e) => W(qr, { indexers: n }, "POST", e), (e) => {
				r(e.indexers), t("Indexer saved");
			});
		},
		children: [/* @__PURE__ */ (0, $.jsxs)(B, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(b, {
				summary: "Indexer Connection Help",
				children: /* @__PURE__ */ (0, $.jsxs)(j, { children: [
					"Enter the Torznab URL and API key provided by Prowlarr or Jackett.",
					" ",
					/* @__PURE__ */ (0, $.jsx)(w, {
						href: "https://github.com/peach-mitao/peach/blob/master/docs/RESOURCE_SEARCH.md",
						children: "Detailed Setup Guide"
					})
				] })
			}), n.map((e, t) => /* @__PURE__ */ (0, $.jsx)("div", {
				className: "min-w-0 border-t border-separator-border pt-2",
				children: /* @__PURE__ */ (0, $.jsx)(b, {
					defaultOpen: !e.url,
					summary: /* @__PURE__ */ (0, $.jsx)(Xr, {
						row: e,
						index: t
					}),
					children: /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, $.jsx)(M, {
								label: "Name",
								"aria-label": `Indexer ${t + 1} name`,
								value: e.name,
								maxLength: 80,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { name: t })
							}),
							/* @__PURE__ */ (0, $.jsx)(M, {
								label: "Torznab URL",
								"aria-label": `Indexer ${t + 1} Torznab URL`,
								value: e.url,
								type: "url",
								autoComplete: "off",
								placeholder: "API URL provided by the indexer",
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { url: t })
							}),
							/* @__PURE__ */ (0, $.jsx)(M, {
								label: "API key",
								"aria-label": `Indexer ${t + 1} API key`,
								type: "password",
								autoComplete: "new-password",
								value: e.api_key || "",
								placeholder: e.api_key_set ? "Saved; leave blank to keep it" : void 0,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { api_key: t })
							}),
							/* @__PURE__ */ (0, $.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-6 gap-y-2",
								children: [
									/* @__PURE__ */ (0, $.jsx)(v, {
										isSelected: e.enabled,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { enabled: t }),
										children: "Enable"
									}),
									e.api_key_set ? /* @__PURE__ */ (0, $.jsx)(v, {
										isSelected: !!e.clear_api_key,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { clear_api_key: t }),
										children: "Clear saved API key"
									}) : null,
									/* @__PURE__ */ (0, $.jsx)(d, {
										variant: "danger",
										type: "button",
										size: "small",
										disabled: !!i.busy,
										"aria-label": `Remove indexer ${t + 1}`,
										onClick: () => r(n.filter((t) => t.key !== e.key)),
										children: "Remove"
									})
								]
							})
						]
					})
				})
			}, e.key))]
		}), i.error ? /* @__PURE__ */ (0, $.jsx)(C, { children: i.error }) : null] }), /* @__PURE__ */ (0, $.jsxs)(A, { children: [/* @__PURE__ */ (0, $.jsx)(d, {
			variant: "secondary",
			type: "button",
			disabled: !!i.busy || n.length >= e.max_indexers,
			onClick: () => r([...n, {
				key: ot(),
				name: "",
				url: "",
				enabled: !0,
				api_key_set: !1
			}]),
			children: "Add Indexer"
		}), /* @__PURE__ */ (0, $.jsx)(d, {
			type: "submit",
			...G(i.busy === "save"),
			children: "Save settings"
		})] })]
	});
}
// src/react/settings/source-settings.tsx
function Qr({ data: e, receipt: t, panel: n, issues: r }) {
	let i = X({
		queryKey: E,
		queryFn: ({ signal: e }) => Ke(e),
		enabled: n?.active !== !1,
		refetchOnMount: "always"
	});
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		...Q(n),
		children: [
			r,
			/* @__PURE__ */ (0, $.jsx)("div", { children: /* @__PURE__ */ (0, $.jsx)(f, {
				href: "/sources",
				variant: "secondary",
				children: "Sources and Sign-in Status"
			}) }),
			i.data ? /* @__PURE__ */ (0, $.jsx)(Gr, {
				data: i.data,
				readOnly: !!e.ledger_read_only,
				toast: t,
				embedded: !0
			}) : i.error ? /* @__PURE__ */ (0, $.jsx)(N, {
				tone: "error",
				title: "Source Credentials Unavailable",
				children: K(i.error)
			}) : n?.active === !1 ? null : /* @__PURE__ */ (0, $.jsx)(Ee, {
				label: "Loading source credentials",
				html: Ue
			}),
			/* @__PURE__ */ (0, $.jsx)(ur, { receipt: t }),
			/* @__PURE__ */ (0, $.jsx)(Jr, { receipt: t }),
			e.entry_links ? /* @__PURE__ */ (0, $.jsx)(Kr, {
				initial: e.entry_links,
				receipt: t
			}) : null
		]
	});
}
// src/react/settings/configuration-shape.ts
function $r(e) {
	let t = e.downloads;
	if (!t) return null;
	let n = t.media_sources ?? [];
	return {
		cloud: n.some((e) => p.includes(e)),
		has115: n.includes("115"),
		pikpak: n.includes("pikpak"),
		pikpakRoots: t.pikpak_roots.length > 0,
		pikpakLoggedIn: t.pikpak.logged_in,
		browserLogin: t.pikpak_browser.available
	};
}
function ei(e) {
	let t = e.tunnel;
	return {
		port: !!(e.editable && e.port_editable !== !1),
		addresses: e.network ? 1 + Number(!!(e.network.lan_url || e.network.ip_url)) + Number(!!(e.network.lan_url && e.network.ip_url)) : 0,
		networkEditable: !!e.network?.editable,
		lan: e.network?.host === "0.0.0.0",
		proxyAddress: e.peach_proxy?.mode === "proxy" || !!e.peach_proxy?.needs_selection,
		access: e.access?.mode ?? "",
		tunnelNamed: !!t?.named_available,
		tunnelNamedMode: !!(t?.named_available && t.mode === "named"),
		tunnelNote: !!(t && (!t.available || t.state === "starting" || t.state === "running" && t.url))
	};
}
function ti(e) {
	let t = e.updates, n = e.update_job?.state ?? "idle", r = !t || t.state === "unchecked" && !t.checked_at && n === "idle", i = +!!t?.package_kind + (r ? 0 : +!!t?.checked_at + (t?.state === "unchecked" ? 0 : 1) + (n === "idle" ? 0 : 1)), a = e.automatic_updates, o = e.storage;
	return {
		releaseFacts: t?.package_kind ? 5 : 4,
		releaseNotes: i,
		autoUpdateHelp: !(!a || a.available && !a.download_available),
		startupNote: !!e.startup?.message,
		desktopNote: !!e.startup?.desktop_message,
		storageRows: o?.usage?.categories.length ?? 0,
		storageNotes: o && !o.relocation.available ? 1 : 0,
		reporting: !!e.remote_reporting,
		reportingIdle: !(!e.remote_reporting || e.remote_reporting.available),
		sharing: !!e.library_sharing,
		sharingNotice: !!e.library_sharing?.notice,
		sharingIdle: !(!e.library_sharing || e.library_sharing.available),
		facts: e.facts.map((e) => e.term),
		uninstall: !!e.uninstall,
		uninstallHelp: !!e.uninstall?.available
	};
}
// src/react/settings/configuration-page.tsx
function ni({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
	let i = X({
		queryKey: h,
		queryFn: ({ signal: e }) => Ge(e)
	}), a = i.data;
	return a ? /* @__PURE__ */ (0, $.jsx)(ai, {
		data: a,
		receipt: e,
		reopenTutorial: t,
		section: n,
		diagnostics: r,
		refreshing: i.isFetching,
		reload: () => {
			i.refetch({ cancelRefetch: !1 });
		}
	}) : /* @__PURE__ */ (0, $.jsx)("div", {
		className: "ui-configpage",
		children: /* @__PURE__ */ (0, $.jsx)(N, {
			tone: "error",
			title: "Couldn’t load settings",
			children: i.error ? K(i.error) : "Settings could not be loaded. Refresh the page and try again."
		})
	});
}
function ri({ data: e, sections: t, reload: n, refreshing: r }) {
	return /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: t.map((t) => {
		let i = e.section_errors?.[t];
		return i ? /* @__PURE__ */ (0, $.jsx)(N, {
			tone: "error",
			title: i.title,
			action: /* @__PURE__ */ (0, $.jsx)(d, {
				variant: "secondary",
				size: "small",
				onClick: n,
				...G(r),
				children: "Reload"
			}),
			children: i.message
		}, t) : null;
	}) });
}
var ii = 0;
function ai({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let [s] = (0, Z.useState)(() => `board-tabs-${++ii}`), [c, l] = (0, Z.useState)(r), u = (0, Z.useRef)(null), d = (0, Z.useRef)(c);
	(0, Z.useEffect)(() => {
		l(r);
	}, [r]), (0, Z.useEffect)(() => {
		let t = $r(e);
		t && J("downloads", t), J("network", ei(e)), J("maintenance", ti(e));
	}, [e]), (0, Z.useLayoutEffect)(() => {
		if (d.current === c) return;
		d.current = c;
		let e = u.current?.querySelector("[role=\"tablist\"]"), t = u.current?.querySelector(".ui-board-group-active");
		if (!e || !t) return;
		let n = parseFloat(getComputedStyle(e).top);
		if (!Number.isFinite(n) || e.getBoundingClientRect().top > n + 1) return;
		let r = matchMedia("(max-width:900px)").matches ? e.getBoundingClientRect().bottom + 8 : n;
		window.scrollTo(0, Math.max(0, window.scrollY + t.getBoundingClientRect().top - r));
	}, [c]);
	let f = (e) => {
		l(e), ft(dt(e), {
			replace: !0,
			state: rt.navigation.location.state
		});
	}, [p, m] = (0, Z.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, Z.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => m(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let h = (0, Z.useRef)([]), g = {
		data: e,
		receipt: t
	}, _ = (t) => /* @__PURE__ */ (0, $.jsx)(ri, {
		data: e,
		sections: t,
		reload: a,
		refreshing: o
	}), v = [
		"peach_proxy",
		"access",
		"tunnel",
		"push_discovery",
		...e.editable && e.port_editable !== !1 ? ["media_sources"] : []
	], y = !!(e.peach_proxy || e.access || e.tunnel || e.editable && e.port_editable !== !1 || v.some((t) => e.section_errors?.[t])), b = e.downloads, x = [
		{
			title: "Libraries & Importing",
			body: (n) => /* @__PURE__ */ (0, $.jsxs)("div", {
				...Q(n),
				children: [
					_([
						"media_sources",
						"library_count",
						"mount_dependencies"
					]),
					!e.section_errors?.media_sources && !e.section_errors?.library_count ? /* @__PURE__ */ (0, $.jsx)(ir, { ...g }) : null,
					/* @__PURE__ */ (0, $.jsx)(xr, { receipt: t }),
					/* @__PURE__ */ (0, $.jsx)(mr, { receipt: t })
				]
			})
		},
		{
			title: "Sources & Subscriptions",
			body: (e) => /* @__PURE__ */ (0, $.jsx)(Qr, {
				...g,
				panel: e,
				issues: _(["entry_links"])
			})
		},
		...b || e.section_errors?.downloads ? [{
			title: "Download Services",
			body: (e) => /* @__PURE__ */ (0, $.jsx)(Xt, {
				initial: b,
				receipt: t,
				panel: e,
				issues: _(["downloads"])
			})
		}] : [],
		...y ? [{
			title: "Network & Access",
			body: (e) => /* @__PURE__ */ (0, $.jsx)(Lr, {
				...g,
				panel: e,
				issues: _(v)
			})
		}] : [],
		{
			title: "App & Maintenance",
			body: (e) => /* @__PURE__ */ (0, $.jsxs)("div", {
				...Q(e),
				children: [
					_([
						"startup",
						"uninstall",
						"storage",
						"remote_reporting",
						"library_sharing",
						"updates",
						"update_job",
						"automatic_updates",
						"facts"
					]),
					/* @__PURE__ */ (0, $.jsx)(wn, { ...g }),
					/* @__PURE__ */ (0, $.jsx)(hr, { receipt: t }),
					/* @__PURE__ */ (0, $.jsx)(pn, {
						...g,
						reopenTutorial: n
					})
				]
			})
		},
		{
			title: "System Diagnostics",
			body: (e) => /* @__PURE__ */ (0, $.jsx)("div", {
				...Q(e),
				children: e.active ? i : null
			})
		}
	], S = Math.max(0, x.findIndex((e) => e.title === c)), ee = (e, t) => {
		let n = x.length - 1, r;
		if (e.key === "ArrowRight" || e.key === "ArrowDown") r = t === n ? 0 : t + 1;
		else if (e.key === "ArrowLeft" || e.key === "ArrowUp") r = t === 0 ? n : t - 1;
		else if (e.key === "Home") r = 0;
		else if (e.key === "End") r = n;
		else return;
		e.preventDefault(), f(x[r].title), h.current[r]?.focus();
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		ref: u,
		className: "ui-configpage",
		children: [/* @__PURE__ */ (0, $.jsx)(be, {
			className: "ui-board-local-nav",
			role: "tablist",
			"aria-label": "Settings sections",
			"data-section-nav": "",
			"data-section-items": "",
			"data-pill-nav": "",
			"aria-orientation": p ? "horizontal" : "vertical",
			children: x.map(({ title: e }, t) => /* @__PURE__ */ (0, $.jsx)("button", {
				ref: (e) => {
					h.current[t] = e;
				},
				type: "button",
				role: "tab",
				id: `${s}-tab-${t}`,
				"aria-controls": `${s}-panel-${t}-0`,
				"aria-selected": t === S,
				"data-pill-selected": t === S ? "" : void 0,
				"data-pill-variant": "gray",
				tabIndex: t === S ? 0 : -1,
				onClick: () => f(e),
				onKeyDown: (e) => ee(e, t),
				children: e
			}, e))
		}), x.map(({ title: e, body: t }, n) => /* @__PURE__ */ (0, $.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("h2", {
			className: "ui-configgroup",
			children: e
		}), t({
			index: n,
			id: `${s}-panel-${n}-0`,
			labelledBy: `${s}-tab-${n}`,
			active: n === S
		})] }, e))]
	});
}
export { ni as ConfigurationPage };

//# debugId=56eb3a9d-19be-41c7-8300-7c52e0975a55