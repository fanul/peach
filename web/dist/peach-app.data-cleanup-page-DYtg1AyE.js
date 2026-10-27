(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c2946980-f57c-4ba7-ac20-f0c478d961df", e._sentryDebugIdIdentifier = "sentry-dbid-c2946980-f57c-4ba7-ac20-f0c478d961df");
	} catch {}
})();
import { Button as e, Chip as t, DIRECTORY_TEMPLATE_ERROR as n, DUPLICATES_KEY as r, Fieldset as i, FieldsetTitle as a, IDLE_REPAIR as o, IconButton as s, Input as c, JUNK_KEY as l, LINKS_KEY as u, LINK_CHECK_KEY as d, LINK_KINDS as f, LINK_PRUNE_KEY as p, LOC as m, LibraryProcessingCard as h, MEDIA_REPAIR_KEY as g, MEDIA_REPAIR_URL as _, MEDIA_SOURCES_KEY as v, MEDIA_SOURCE_ICONS as y, Note as b, ORGANIZE_KEY as x, ORPHAN_RECORDS_KEY as S, Progress as C, QUALITY_GOALS_KEY as w, REPAIR_CARD_TEXT as T, REPAIR_LIBRARIES_KEY as E, RESOURCE_APPLY_KEY as D, RESOURCE_SCAN_KEY as O, RESULT_PANEL as ee, RESULT_SECTION as k, REVIEW_COUNTS_KEY as A, SOURCE_LABELS as j, Select as te, SelectItem as ne, SourceMark as M, StatusLabel as N, TRASH_KEY as re, TaskProgress as P, Wt as F, __toESM as ie, apiSend as ae, applyConfirmText as I, applyLeftovers as L, applyPlanText as R, applyText as oe, attachOrphan as se, baseName as z, busyProps as B, candidateText as ce, checkLine as le, confirmModal as V, entityFaceImg as ue, entityPath as de, errorMessage as H, esc as fe, fetchDuplicates as pe, fetchJunkSummary as me, fetchLinkCheck as U, fetchLinkPrune as he, fetchLinkStats as W, fetchMediaRepair as ge, fetchMediaSources as _e, fetchOrganize as ve, fetchOrganizeExample as ye, fetchOrphanRecords as be, fetchQualityGoals as xe, fetchRepairLibraries as Se, fetchResourceApply as Ce, fetchResourceScan as we, fetchReviewCounts as Te, fetchTrashSummary as Ee, firstGrapheme as De, fmtSize as Oe, hasChanges as ke, hasResourceRoots as Ae, junkBreakdown as je, missingToolText as Me, organizeOutcome as Ne, pickOrganizeFolder as Pe, planSummary as Fe, previewOrganize as Ie, pruneText as Le, purgeCount as Re, purgeOrphan as ze, queryClient as G, recordsText as Be, rememberTemplates as Ve, require_jsx_runtime as He, require_react as Ue, reviewSummary as We, scanLine as Ge, sourceMeta as Ke, spriteGlyph as K, startLinkCheck as qe, startLinkPrune as Je, startOrganize as Ye, startResourceApply as Xe, startResourceScan as Ze, statusLine as Qe, useAction as $e, useBackgroundJob as q, useMutation as et, useQuery as J, withOrganizeJob as tt } from "./peach-app.js";
import { Page as nt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as rt } from "./peach-app.error-excerpt-Cu3bobTS.js";
import { PLAIN_STAT_STRIP as it, PlainStat as Y, plainStatClass as X } from "./peach-app.stat-card-DsNmy_0F.js";
import { DataTable as at } from "./peach-app.data-table-C0dVfAum.js";
import { SiteMark as ot } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as st } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as ct } from "./peach-app.folder-rows-CsnrS785.js";
import { ConnectionStatus as lt } from "./peach-app.connection-status-B0tSnjj0.js";
// src/react/media-repair/media-repair-card.tsx
var Z = /* @__PURE__ */ ie(Ue(), 1), Q = He(), ut = (e) => y[e] || e, dt = (e) => G.setQueryData(g, e);
function ft({ toast: t = () => {} }) {
	let n = q({
		queryKey: g,
		queryFn: ({ signal: e }) => ge(e),
		start: (e) => ae(_, {
			library: e,
			restart: !0
		}),
		onFinish: (e) => {
			e.status === "complete" && !e.failed && !e.missing_tool && t(e.repaired ? `已修复 ${e.repaired.toLocaleString()} 部视频` : "已检查媒体库，没有需要修复的视频");
		}
	}), r = J({
		queryKey: E,
		queryFn: ({ signal: e }) => Se(e)
	}), [s, c] = (0, Z.useState)(""), l = $e(), u = n.job ?? o, d = r.data ?? [], f = u.status === "running", p = d.find((e) => e.id === (f ? u.library : s)) ?? d.find((e) => e.id === u.library) ?? d[0], m = () => {
		p && V({
			title: `修复媒体库「${p.name}」`,
			body: "缺时间戳表的片子另存一份修好的头，原文件不动；缺索引的片子重建后替换原文件，坏原件改名成同目录的隐藏文件（.文件名.peach-original）留着。" + (p.metered ? "这个库在计费来源上，每修一部都要把片子完整拉一遍。" : ""),
			confirmLabel: "修复媒体库",
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void l.run("stop", (e) => ae(_, { stop: !0 }, "POST", e), dt), v = n.outcome, y = Qe(f ? u : v ?? o), x = l.error || v?.error || (n.query.error ? "读不到媒体修复的状态" : "");
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsx)(i, {
			layout: "split",
			label: "媒体修复",
			footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(te, {
				"aria-label": "媒体库",
				prefix: "媒体库",
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !d.length,
				onSelectionChange: (e) => {
					e !== null && c(String(e));
				},
				children: d.map((e) => /* @__PURE__ */ (0, Q.jsxs)(ne, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ (0, Q.jsx)(M, { mark: ut(e.icon) }), e.name]
				}, e.id))
			}), f ? /* @__PURE__ */ (0, Q.jsx)(e, {
				onClick: h,
				...B(l.busy === "stop"),
				children: "停止"
			}) : /* @__PURE__ */ (0, Q.jsx)(e, {
				onClick: m,
				disabled: !p,
				children: "开始修复"
			})] }),
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(a, { children: "媒体修复" }),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: T
					}),
					f && u.total ? /* @__PURE__ */ (0, Q.jsx)(C, {
						label: "修复进度",
						value: u.checked,
						max: u.total
					}) : null,
					y ? /* @__PURE__ */ (0, Q.jsx)("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: y
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [v?.status === "complete" && v.missing_tool ? /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "warning",
				title: "缺少 untrunc",
				action: /* @__PURE__ */ (0, Q.jsx)(e, {
					variant: "ghost",
					size: "small",
					onClick: n.dismiss,
					children: "关闭提示"
				}),
				children: Me(v)
			}) : null, x ? /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "error",
				children: x
			}) : null]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function pt({ className: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		"data-link-check-icon": "",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ (0, Q.jsx)("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ (0, Q.jsxs)("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M8 2v3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M2 8h3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M16 19v3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var mt = K("rotate-cw"), ht = "The site returned 404 or 410, confirming that this address no longer exists.", gt = "Sites that block automated access and temporary failures appear here. Links are kept; select individual links to retry.", _t = "Each link will be rechecked before deletion. This cannot be undone.", vt = "Unable to retrieve progress. Reconnecting…", yt = (e) => Number(e || 0).toLocaleString();
function bt({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function xt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	return t.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
		className: k,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, Q.jsx)(at, {
			label: e,
			items: t,
			columns: [
				{
					id: "entity",
					label: "Peach profile",
					width: 180,
					min: 128,
					value: (e) => e.entity,
					render: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
						className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
						href: e.entity_id && e.entity_kind ? de(e.entity_kind, e.entity, e.entity_id) : void 0,
						"data-link-identity": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("span", {
							"data-link-avatar": "",
							className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${st}`,
							"aria-hidden": !0,
							dangerouslySetInnerHTML: { __html: `<span>${fe(De(e.entity))}</span>` + ue({
								kind: e.entity_kind,
								id: e.entity_id,
								hasImage: e.face?.has_image,
								version: e.face?.image_version,
								focus: e.face?.avatar_focus,
								thumb: !0,
								mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
							}) }
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.entity
						})]
					})
				},
				{
					id: "kind",
					label: "Type",
					width: 128,
					value: (e) => f[e.link_kind] || e.link_kind,
					render: (e) => f[e.link_kind] || e.link_kind
				},
				{
					id: "label",
					label: "Link name",
					min: 128,
					value: (e) => e.label || "",
					render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "flex min-w-24 items-center gap-2",
						"data-link-name": "",
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.label || new URL(e.url).hostname
						})
					})
				},
				{
					id: "note",
					label: "Result",
					width: 320,
					min: 192,
					value: (e) => e.note,
					render: (e) => /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "min-w-0 w-full",
						"data-link-result": s ? "gone" : "unclear",
						children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, Q.jsx)(N, {
							tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
							"data-link-code": "",
							children: e.note.trim()
						}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, Q.jsx)(N, {
								tone: s ? "error" : "warning",
								children: s ? "Invalid address" : "No conclusion"
							}), /* @__PURE__ */ (0, Q.jsx)(rt, {
								text: e.note,
								className: "tabular-nums text-text-secondary"
							})]
						})
					})
				},
				{
					id: "url",
					label: "Address",
					width: 360,
					min: 180,
					value: (e) => e.url,
					render: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
						href: e.url,
						target: "_blank",
						rel: "noopener noreferrer",
						title: e.url,
						"data-link-address": "",
						className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(ot, { linkId: e.id }),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								"data-middle-truncate": !0,
								className: "min-w-0 truncate",
								children: e.url
							}),
							/* @__PURE__ */ (0, Q.jsx)(F, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})
						]
					})
				}
			],
			rowId: (e) => String(e.id),
			description: n,
			unit: "links",
			panel: !1,
			footerActions: o,
			rowLabel: (e) => `${e.label || e.url} for ${e.entity}`,
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	}) : null;
}
function St() {
	let n = J({
		queryKey: u,
		queryFn: ({ signal: e }) => W(e)
	}), [r, o] = (0, Z.useState)([]), [s, c] = (0, Z.useState)([]), l = q({
		queryKey: p,
		queryFn: ({ signal: e }) => he(e),
		start: Je,
		onFinish: () => {
			G.invalidateQueries({
				queryKey: u,
				exact: !0
			}), G.invalidateQueries({
				queryKey: d,
				exact: !0
			});
		}
	}), m = q({
		queryKey: d,
		queryFn: ({ signal: e }) => U(e),
		start: qe,
		onStarted: () => {
			l.dismiss(), o([]), c([]);
		}
	}), h = m.job, g = h?.check_id ?? "";
	(0, Z.useEffect)(() => {
		o([]), c([]);
	}, [g]);
	let _ = m.running || m.start.isPending, v = l.running || l.start.isPending, y = h?.status === "complete", x = h?.gone ?? [], S = h?.unclear ?? [], C = y ? S : [], w = x.filter((e) => s.includes(e.id)).map((e) => e.id), T = C.filter((e) => r.includes(e.id)).map((e) => e.id), E = n.data, D = (E?.top_hosts ?? []).slice(0, 3), O = (e) => {
		_ || e && !e.length || m.start.mutate(e ? {
			retry: e,
			checkId: g
		} : {});
	}, A = (e) => {
		!v && x.length && V({
			title: "Delete invalid links",
			body: `This will delete ${e?.length ?? x.length} invalid links. They will be checked again first and cannot be restored after deletion.`,
			confirmLabel: "Delete invalid links",
			danger: !0,
			onConfirm: () => l.start.mutateAsync({
				checkId: g,
				ids: e
			})
		});
	}, j = l.outcome, te = m.start.error ?? l.start.error, ne = null, M = null;
	if (j?.status === "failed") M = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Link cleanup incomplete",
		children: j.error || "Check the task log to verify which links were processed."
	});
	else if (j && !x.length && !S.length) M = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "success",
		title: "Complete",
		children: Le(j)
	});
	else if (te) M = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Check failed",
		children: H(te)
	});
	else if (m.query.isError && h) M = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "neutral",
		title: "Task status",
		children: vt
	});
	else if (h?.status === "failed") M = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Check failed",
		children: h.error || "Check failed"
	});
	else if (h && h.status !== "idle") {
		ne = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [h.status === "running" ? /* @__PURE__ */ (0, Q.jsx)(P, {
			embedded: !0,
			label: le(h),
			value: Math.min(h.checked || 0, h.total || 0),
			total: h.total
		}) : null, v ? /* @__PURE__ */ (0, Q.jsx)(P, {
			embedded: !0,
			label: l.job?.message || "Rechecking and deleting invalid links",
			value: Math.min(l.job?.checked || 0, l.job?.total || 0),
			total: l.job?.total
		}) : null] });
		let t = `Retry selected (${T.length})`;
		M = y || x.length || S.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: ee,
			children: [
				j?.status === "complete" ? /* @__PURE__ */ (0, Q.jsx)(b, {
					tone: "success",
					title: "Complete",
					children: Le(j)
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(xt, {
					title: "Invalid addresses",
					items: x,
					hint: ht,
					picked: s,
					onPick: c,
					confirmed: !0,
					footer: y && x.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: _t
					}), /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "danger",
						...B(v),
						onClick: () => A(),
						children: `Delete ${x.length} invalid links`
					})] }) : null,
					children: /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "danger",
						size: "small",
						disabled: !y || !w.length,
						...B(v),
						onClick: () => A(w),
						children: `Delete selected (${w.length})`
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(xt, {
					title: "Unreachable this time",
					items: S,
					hint: gt,
					picked: r,
					onPick: o,
					footer: C.length ? /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "primary",
						leadingIcon: mt,
						...B(_),
						onClick: () => O(C.map((e) => e.id)),
						children: `Retry all (${C.length})`
					}) : null,
					children: C.length ? /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "secondary",
						leadingIcon: mt,
						disabled: !T.length,
						...B(_),
						onClick: () => O(T),
						children: t
					}) }) : null
				}),
				y && !x.length && !S.length ? /* @__PURE__ */ (0, Q.jsx)("p", {
					className: `${k} text-body-regular text-notification-success-foreground`,
					children: "All links are reachable."
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(i, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(e, {
				"data-link-check": "",
				leadingIcon: pt,
				...B(_),
				onClick: () => O(),
				children: _ ? "Checking" : y ? "Check again" : "Check broken links"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(a, {
					id: "link-manager-title",
					gap: "small",
					children: "Link management"
				}),
				n.isError ? /* @__PURE__ */ (0, Q.jsx)(b, {
					tone: "error",
					title: "Failed to load link statistics",
					children: H(n.error)
				}) : E ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, Q.jsx)(bt, {
						label: "Total links",
						value: yt(E.total),
						note: `Across ${yt(E.entities)} performers, studios, and series`
					}), Object.entries(E.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(bt, {
						label: f[e] || e,
						value: yt(t)
					}, e))]
				}), D.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: "Top sites"
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: D.map(([e, n]) => /* @__PURE__ */ (0, Q.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, Q.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(ot, { linkId: E.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, Q.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, Q.jsx)(F, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, Q.jsx)(t, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "tabular-nums",
									children: yt(n)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: ne
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: M
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Ct = (e, t) => `This will organize ${t ? `“${t}” and its subfolders in “${e}”` : `filenames and folders in “${e}”`}, clean special characters and garbled text, and rename or move files using the templates. Rows whose targets already exist will be skipped. This batch can be rolled back in full.`, wt = "This will restore files changed by the last batch to their previous names and locations, along with their database paths. The batch will no longer appear here afterward.", Tt = 8;
function Et({ plan: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Tt).map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: z(e.current_path)
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: z(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Tt ? /* @__PURE__ */ (0, Q.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: "Only the first 8 rows are shown. The full plan is in the plan CSV."
	}) : null] });
}
function Dt({ toast: t, failure: r }) {
	let o = J({
		queryKey: x,
		queryFn: ({ signal: e }) => ve(e)
	}), l = o.data, u = l?.locations ?? [], [d, f] = (0, Z.useState)(""), p = u.some((e) => e.location === d) ? d : u[0]?.location ?? "", h = l?.templates?.[p], [g, _] = (0, Z.useState)(null), v = g?.location === p ? g : {
		location: p,
		file: h?.file ?? "",
		dir: h?.dir ?? ""
	}, S = (e) => {
		_({
			...v,
			...e
		}), I.reset();
	}, [C, w] = (0, Z.useState)({
		location: "",
		path: ""
	}), T = C.location === p ? C.path : "", E = (0, Z.useRef)({
		location: p,
		path: T
	});
	E.current = {
		location: p,
		path: T
	};
	let [D, O] = (0, Z.useState)(null), ee = (0, Z.useRef)(null), k = (0, Z.useRef)(null), A = (0, Z.useRef)(null), j = J({
		queryKey: [
			"organize-example",
			v.file,
			v.dir
		],
		queryFn: ({ signal: e }) => ye(v.file, v.dir, e),
		enabled: !!l
	}), [N, re] = (0, Z.useState)("file"), F = (0, Z.useRef)(!1), ie = (0, Z.useRef)(null);
	(0, Z.useLayoutEffect)(() => {
		let e = ie.current;
		if (!e) return;
		ie.current = null;
		let t = (e.field === "file" ? ee : k).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let ae = () => ({
		location: p,
		path: T.trim(),
		file_template: v.file.trim(),
		dir_template: v.dir.trim()
	}), I = et({
		mutationFn: Ie,
		onError: (e) => {
			let t = /整理路径/.test(H(e)) ? "path" : n.test(H(e)) ? "dir" : "file";
			O(t), (t === "path" ? A : t === "dir" ? k : ee).current?.focus();
		}
	}), L = et({
		mutationFn: ({ initial: e }) => Pe(e),
		onSuccess: (e, t) => {
			e.path && t.location === E.current.location && t.path === E.current.path && (w({
				location: t.location,
				path: e.path
			}), O(null), I.reset(), A.current?.focus());
		}
	}), R = q({
		queryKey: x,
		queryFn: ({ signal: e }) => ve(e),
		start: Ye,
		jobOf: (e) => e,
		withJob: tt,
		onStarted: () => I.reset(),
		onFinish: (e) => {
			if (G.invalidateQueries({
				queryKey: x,
				exact: !0
			}), e.status !== "complete") return;
			let { text: n, failed: i } = Ne(e);
			i ? r("Organize files", /* @__PURE__ */ Error(`${i} rows could not be processed`)) : t(n.replace(/。$/, ""));
		}
	}), oe = R.running || R.start.isPending, se = JSON.stringify(I.variables) === JSON.stringify(ae()), z = se ? I.data : void 0, ce = Number(z?.counts?.change || 0), le = m[p] || p, ue = (e) => {
		S(e), O(null), I.reset();
	}, de = (e) => {
		let t = (N === "file" ? ee : k).current, n = v[N], r = F.current ? t?.selectionStart ?? n.length : n.length, i = F.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		ie.current = {
			field: N,
			caret: r + a.length
		}, ue({ [N]: n.slice(0, r) + a + n.slice(i) });
	}, fe = () => {
		I.isPending || oe || !p || (R.dismiss(), R.start.reset(), O(null), I.mutate(ae()));
	}, pe = () => {
		let e = I.variables;
		e && z && ce && V({
			title: "Organize files",
			body: Ct(le, e.path),
			confirmLabel: "Organize files",
			onConfirm: async () => {
				await R.start.mutateAsync({
					kind: "apply",
					request: e
				}), Ve({
					...l?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, me = () => void V({
		title: "Roll back last batch",
		body: wt,
		confirmLabel: "Roll back",
		onConfirm: () => R.start.mutateAsync({ kind: "rollback" })
	}), U = null, he = !!ce && !oe && !R.outcome, W = R.job, ge = R.outcome;
	if (W?.status === "running") {
		let e = W.message || W.stage || "Organizing files";
		U = /* @__PURE__ */ (0, Q.jsx)(P, {
			embedded: !0,
			label: e,
			value: Math.min(W.checked || 0, W.total || 0),
			total: W.total
		});
	} else if (ge?.status === "failed") U = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "File organization incomplete",
		children: ge.error || "Check the task log to verify which files were processed."
	});
	else if (ge) {
		let { text: e, failed: t } = Ne(ge);
		U = /* @__PURE__ */ (0, Q.jsx)(b, {
			tone: t ? "warning" : "success",
			title: t ? "Partially complete" : "Organization result",
			children: e
		});
	} else R.start.isError ? U = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Organization failed",
		children: H(R.start.error)
	}) : I.isPending ? U = /* @__PURE__ */ (0, Q.jsx)(P, {
		embedded: !0,
		label: "Checking organization plan"
	}) : I.isError && se ? U = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Organization preview failed",
		children: H(I.error)
	}) : z && (U = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "neutral",
		title: "Preview",
		children: Fe(z)
	}), ce ? /* @__PURE__ */ (0, Q.jsx)(Et, { plan: z }) : null] }));
	return /* @__PURE__ */ (0, Q.jsxs)(i, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			l?.last_batch ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "secondary",
				...B(oe),
				onClick: me,
				children: "Roll back last batch"
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(e, {
				variant: he ? "secondary" : "primary",
				disabled: !u.length || oe,
				...B(I.isPending),
				onClick: fe,
				children: "Preview"
			}),
			he ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "primary",
				onClick: pe,
				children: "Organize"
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(a, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: "Organize"
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: "Clean special characters and garbled text from filenames, or use templates to rename and organize files into folders. Preview first, then apply; an applied batch can be rolled back in full."
			}),
			o.isError ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, Q.jsx)(b, {
					tone: "error",
					title: "Failed to load organization settings",
					children: H(o.error)
				})
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [u.length ? /* @__PURE__ */ (0, Q.jsx)(te, {
							"aria-label": "Source to organize",
							prefix: "Source",
							className: "w-fit min-w-25",
							selectedKey: p || null,
							onSelectionChange: (e) => {
								e !== null && (f(String(e)), w({
									location: String(e),
									path: ""
								}), O(null), I.reset(), L.reset(), F.current = !1);
							},
							children: u.map((e) => /* @__PURE__ */ (0, Q.jsxs)(ne, {
								id: e.location,
								textValue: m[e.location] || e.location,
								children: [/* @__PURE__ */ (0, Q.jsx)(M, { mark: y[e.location] || "database" }), m[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, Q.jsx)(c, {
								"aria-label": "Path to organize",
								className: "min-w-0 flex-1",
								placeholder: "Leave blank to organize the entire source",
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: T,
								ref: A,
								isInvalid: D === "path",
								onChange: (e) => {
									w({
										location: p,
										path: e
									}), O(null), I.reset(), L.reset();
								}
							}), /* @__PURE__ */ (0, Q.jsx)(s, {
								icon: ct,
								"aria-label": "Choose path to organize",
								...B(L.isPending),
								onClick: () => L.mutate({
									initial: T || u.find((e) => e.location === p)?.roots[0] || "",
									location: p,
									path: T
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: "A specified path includes subfolders, and the folder template starts from that path. Leave both templates blank to clean filenames only."
					}),
					L.isError ? /* @__PURE__ */ (0, Q.jsxs)(b, {
						tone: "error",
						title: "Folder selection failed",
						children: [H(L.error), ". You can also enter the path directly."]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(c, {
						label: "Filename template",
						placeholder: "{code}[ {title}]",
						value: v.file,
						ref: ee,
						spellCheck: "false",
						isInvalid: D === "file",
						onFocus: () => {
							re("file"), F.current = !0;
						},
						onChange: (e) => ue({ file: e })
					}),
					/* @__PURE__ */ (0, Q.jsx)(c, {
						label: "Folder template",
						placeholder: "Leave blank to rename in place",
						value: v.dir,
						ref: k,
						spellCheck: "false",
						isInvalid: D === "dir",
						onFocus: () => {
							re("dir"), F.current = !0;
						},
						onChange: (e) => ue({ dir: e })
					}),
					l?.presets?.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": "Apply template",
						children: [/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: "Apply template"
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: l.presets.map((t) => /* @__PURE__ */ (0, Q.jsx)(e, {
								variant: "secondary",
								size: "small",
								title: t.example || t.label,
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									ue({
										file: t.file,
										dir: t.dir
									}), F.current = !1;
								},
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "truncate",
									children: t.label
								})
							}, t.label))
						})]
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": j.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: ["Example path: ", /* @__PURE__ */ (0, Q.jsx)("code", {
							className: "wrap-anywhere",
							children: j.data?.example || j.data?.error || (j.isError ? H(j.error) : "Previewing…")
						})]
					}),
					l?.placeholders?.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": "Insert parameters",
						children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, Q.jsx)("strong", {
									className: "text-caption-1-semibold text-text-primary",
									children: "Insert parameters"
								}),
								" (into the ",
								N === "file" ? "filename template" : "folder template",
								")"
							]
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: l.placeholders.map((t) => /* @__PURE__ */ (0, Q.jsx)(e, {
								variant: "ghost",
								size: "small",
								"aria-label": `${t.label} {${t.key}}`,
								onClick: () => de(t.key),
								children: /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ (0, Q.jsx)("code", { children: `{${t.key}}` }), /* @__PURE__ */ (0, Q.jsx)("span", {
										className: "text-text-secondary",
										children: t.label
									})]
								})
							}, t.key))
						})]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: "Select a parameter to insert it at the cursor or replace selected text. Content in brackets is omitted when its field is empty."
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: U
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var Ot = K("play"), kt = () => G.invalidateQueries({
	queryKey: S,
	exact: !0
});
function At({ item: t, toast: n }) {
	let [r, i] = (0, Z.useState)(t.candidates[0]?.id ?? null), a = et({
		mutationFn: () => se(t.id, Number(r)),
		onSuccess: () => {
			let e = t.candidates.find((e) => e.id === r);
			n(`Transferred personal records from “${t.name}” to “${e?.name ?? "selected file"}”`), kt();
		},
		onError: (e) => n(H(e))
	}), o = et({
		mutationFn: () => ze(t.id),
		onSuccess: (e) => {
			n(e.blocked.length ? `The file for “${t.name}” has been restored. Its records were not deleted and will return to the library after the next scan.` : `Deleted the item and personal records for “${t.name}”`), kt();
		}
	}), s = () => {
		V({
			title: "Delete record",
			body: `This will delete the item record for “${t.name}”${Be(t.records) ? ` and its personal records (${Be(t.records)})` : ""}. This cannot be undone.`,
			confirmLabel: "Delete record",
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				size: "small",
				...B(c),
				onClick: s,
				children: "Delete record"
			}),
			t.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(te, {
				"aria-label": `Select a file to receive the personal records for ${t.name}`,
				prefix: "Destination",
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: t.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(ne, {
					id: e.id,
					textValue: ce(e),
					children: ce(e)
				}, e.id))
			}) : null,
			t.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...B(c),
				onClick: () => a.mutate(),
				children: "Transfer records"
			}) : null
		]
	});
}
function jt({ item: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, Q.jsx)(Ot, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ (0, Q.jsx)("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "truncate text-caption-1-regular text-text-secondary",
				children: [e.code, m[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function Mt({ toast: t }) {
	let [n, r] = (0, Z.useState)([]), o = J({
		queryKey: S,
		queryFn: ({ signal: e }) => be(e)
	}), s = o.data?.items ?? [], c = et({
		mutationFn: (e) => ze(e),
		onSuccess: (e) => {
			t(`Deleted ${e.purged} item records and their personal records${e.blocked.length ? ` ; ${e.blocked.length} files were restored and their records were not deleted` : ""}`), r([]), kt();
		}
	}), l = (e) => void V({
		title: "Delete selected records",
		body: `This will delete the following ${e.length} item records and all of their personal records. This cannot be undone.`,
		items: e.map((e) => e.name),
		confirmLabel: "Delete selected records",
		danger: !0,
		onConfirm: () => c.mutateAsync(e.map((e) => e.id))
	}), u = [
		{
			id: "item",
			label: "Item",
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(jt, { item: e })
		},
		{
			id: "records",
			label: "Personal records",
			width: 176,
			min: 144,
			value: (e) => Be(e.records),
			render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: Be(e.records) || "None"
			})
		},
		{
			id: "target",
			label: "Actions",
			width: s.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(At, {
				item: e,
				toast: t
			})
		}
	];
	return !o.isError && !s.length ? null : /* @__PURE__ */ (0, Q.jsx)("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: o.isError ? /* @__PURE__ */ (0, Q.jsxs)(i, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ (0, Q.jsx)(a, {
				id: "orphan-records-title",
				children: "Records with missing files"
			}), /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "error",
				title: "Failed to load records with missing files",
				children: H(o.error)
			})]
		}) : /* @__PURE__ */ (0, Q.jsx)(at, {
			label: "Items with missing files",
			items: s,
			columns: u,
			title: "Records with missing files",
			titleId: "orphan-records-title",
			unit: "items",
			description: "The source files for these items have been deleted, but likes, Watch Later entries, playlists, and watch history remain. Select a replacement file to transfer these records and delete the old item record.",
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (t) => /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				size: "small",
				disabled: !t.length,
				...B(c.isPending),
				onClick: () => l(t),
				children: `Delete selected records (${t.length})`
			})
		})
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var Nt = K("git-compare"), Pt = K("rotate-cw"), Ft = "Unable to retrieve progress. Reconnecting…", It = "Clean up invalid entries", Lt = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", $ = (e) => Number(e || 0).toLocaleString();
function Rt({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("div", {
		className: Lt,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("article", {
			className: X(),
			children: [/* @__PURE__ */ (0, Q.jsx)(Y, {
				label: j[e.location] || "Media source",
				mark: /* @__PURE__ */ (0, Q.jsx)(M, { mark: y[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, Q.jsx)(lt, {
					online: e.online,
					children: e.online ? "Online" : "Offline"
				}),
				figure: e.online ? `${$(e.missing)} items` : "—",
				meta: e.online ? Ke(e) : `${Ke(e)} · Skipped this time`,
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsxs)(N, {
					tone: "warning",
					children: [$(e.unreadable), "  folders unreadable"]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Lt,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: X(),
				children: /* @__PURE__ */ (0, Q.jsx)(Y, {
					label: "Pending permanent deletion",
					figure: `${$(Re(e))} items`,
					meta: "Files are missing, including items in trash"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: X(),
				children: /* @__PURE__ */ (0, Q.jsx)(Y, {
					label: "Will be marked missing",
					figure: `${$(e.vanish)} items`,
					meta: "Personal records will be kept"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: X(),
				children: /* @__PURE__ */ (0, Q.jsx)(Y, {
					label: "Empty folders",
					figure: `${$(e.empty)} folders`,
					meta: "Source root folders are kept"
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: X(),
				children: /* @__PURE__ */ (0, Q.jsx)(Y, {
					label: "Removable cache",
					figure: `${$(n.files)} files`,
					meta: n.files ? Oe(n.bytes) : ""
				})
			})
		]
	})] });
}
function zt({ toast: t }) {
	let n = q({
		queryKey: D,
		queryFn: ({ signal: e }) => Ce(e),
		start: Xe,
		onFinish: (e) => {
			if (G.invalidateQueries({
				queryKey: re,
				exact: !0
			}), G.invalidateQueries({
				queryKey: O,
				exact: !0
			}), e.status !== "complete") return;
			let { done: n, left: r } = L(e);
			r ? t(`Completed ${$(n)} items; ${$(r)} were not processed`, { warning: !0 }) : t("Invalid entries cleaned up");
		}
	}), r = q({
		queryKey: O,
		queryFn: ({ signal: e }) => we(e),
		start: Ze,
		onStarted: () => n.dismiss()
	}), o = r.job, s = r.running || r.start.isPending, c = n.running || n.start.isPending, l = o?.status === "complete" || o?.status === "failed", u = s ? "Scanning" : l ? "Scan again" : "Check files", d = (e) => void V({
		title: It,
		body: I(e),
		confirmLabel: It,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), f = n.outcome, p = (e) => {
		let t = L(e).left > 0;
		return /* @__PURE__ */ (0, Q.jsx)(b, {
			tone: t ? "warning" : "success",
			title: t ? "Partially complete" : "Cleanup result",
			children: oe(e, Oe)
		});
	}, m = null, h = null;
	if (f?.status === "failed") h = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Resource cleanup incomplete",
		children: f.error || "Check the task log to verify which files were processed."
	});
	else if (f) h = p(f);
	else if (n.running) m = /* @__PURE__ */ (0, Q.jsx)(P, {
		embedded: !0,
		label: n.job?.message || "Rechecking and cleaning up invalid entries"
	});
	else if (r.start.isError) h = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Scan failed",
		children: H(r.start.error)
	});
	else if (r.query.isError && o) h = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "neutral",
		title: "Task status",
		children: Ft
	});
	else if (o?.status === "running") {
		let e = Ge(o);
		m = /* @__PURE__ */ (0, Q.jsx)(P, {
			embedded: !0,
			label: e,
			value: o.completed_sources,
			total: o.total_sources
		}), o.sources?.length && (h = /* @__PURE__ */ (0, Q.jsx)(Rt, {
			scan: o,
			partial: !0
		}));
	} else if (o?.status === "failed") h = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [o.sources?.length ? /* @__PURE__ */ (0, Q.jsx)(Rt, {
		scan: o,
		partial: !0
	}) : null, /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Scan failed",
		children: o.error || "Background scan failed"
	})] });
	else if (o?.status === "complete" && o.applied) h = n.job?.status === "complete" ? p(n.job) : /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "neutral",
		title: "Cleanup result",
		children: "The results of this check have already been cleaned up. Scan again to verify."
	});
	else if (o?.status === "complete") {
		let t = ke(o);
		h = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Rt, { scan: o }), t ? /* @__PURE__ */ (0, Q.jsx)(b, {
			tone: "neutral",
			title: "Cleanup details",
			action: /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				...B(c),
				onClick: () => d(o),
				children: c ? "Rechecking and cleaning up…" : It
			}),
			children: R(o)
		}) : /* @__PURE__ */ (0, Q.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: "All available sources were checked. There are no records, empty folders, or cache files to clean up."
		})] });
	}
	return n.start.isError && !f && (h = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [h, /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: "Cleanup failed",
		children: H(n.start.error)
	})] })), /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(i, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(e, {
				"data-resource-scan": !0,
				leadingIcon: l && !s ? Pt : Nt,
				...B(s),
				onClick: () => {
					s || r.start.mutate();
				},
				children: u
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(a, {
					id: "resource-sync-title",
					gap: "small",
					children: "Resource sync"
				}),
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: "Check each library record against files on local and cloud storage, listing records with missing files, empty folders, and unreferenced cache files."
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: m
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: h
		})]
	});
}
// src/react/data-cleanup/data-cleanup-page.tsx
function Bt(e, t) {
	return e.data === void 0 ? { figure: e.isError ? "Failed to load" : "—" } : t(e.data);
}
function Vt({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, Q.jsx)("button", {
		type: "button",
		className: X({ interactive: !0 }),
		"data-cleanup-go": e,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, Q.jsx)(Y, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
var Ht = K("square-check-big"), Ut = K("sparkles"), Wt = K("file-stack"), Gt = K("file-archive"), Kt = K("trash"), qt = [
	A,
	w,
	r
], Jt = () => {
	for (let e of qt) G.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function Yt({ toast: e, failure: t, open: n }) {
	let i = J({
		queryKey: A,
		queryFn: ({ signal: e }) => Te(e)
	}), a = J({
		queryKey: w,
		queryFn: ({ signal: e }) => xe(e)
	}), o = J({
		queryKey: r,
		queryFn: ({ signal: e }) => pe(e)
	}), s = J({
		queryKey: l,
		queryFn: ({ signal: e }) => me(e)
	}), c = J({
		queryKey: re,
		queryFn: ({ signal: e }) => Ee(e)
	}), u = J({
		queryKey: v,
		queryFn: ({ signal: e }) => _e(e)
	}), d = (t) => e(t);
	return /* @__PURE__ */ (0, Q.jsxs)(nt, { children: [
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: it,
			children: [
				/* @__PURE__ */ (0, Q.jsx)(Vt, {
					section: "review",
					label: "Manual review",
					icon: Ht,
					open: n,
					value: Bt(i, We)
				}),
				/* @__PURE__ */ (0, Q.jsx)(Vt, {
					section: "quality",
					label: "Quality upgrades",
					icon: Ut,
					open: n,
					value: Bt(a, (e) => ({ figure: `${Number(e.total || 0).toLocaleString()} to upgrade` }))
				}),
				/* @__PURE__ */ (0, Q.jsx)(Vt, {
					section: "duplicates",
					label: "Duplicate files",
					icon: Wt,
					open: n,
					value: Bt(o, (e) => Number(e.total || 0) ? {
						figure: `${Number(e.total).toLocaleString()} groups · ${Number(e.files || 0).toLocaleString()} files`,
						meta: `Reclaimable: ${Oe(e.reclaimable || 0)}`
					} : { figure: "No duplicates" })
				}),
				/* @__PURE__ */ (0, Q.jsx)(Vt, {
					section: "ads",
					label: "Junk files",
					icon: Gt,
					open: n,
					value: Bt(s, (e) => ({
						figure: `${Number(e.pending_total || 0).toLocaleString()} pending review`,
						meta: je(e)
					}))
				}),
				/* @__PURE__ */ (0, Q.jsx)(Vt, {
					section: "trash",
					label: "Trash",
					icon: Kt,
					open: n,
					value: Bt(c, (e) => ({
						figure: `${Number(e.total || 0).toLocaleString()} items in trash`,
						meta: e.total ? `Uses ${Oe(e.bytes || 0)}` : ""
					}))
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-col gap-4 max-cleanup-tight:gap-3",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("div", {
					id: "libraryProcessing",
					className: "scroll-mt-20",
					children: /* @__PURE__ */ (0, Q.jsx)(h, {
						toast: d,
						monitor: !0,
						onComplete: Jt
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					id: "mediaRepair",
					children: /* @__PURE__ */ (0, Q.jsx)(ft, { toast: d })
				}),
				/* @__PURE__ */ (0, Q.jsx)(Dt, {
					toast: d,
					failure: t
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsx)(St, {}),
		/* @__PURE__ */ (0, Q.jsx)(Mt, { toast: d }),
		Ae(u.data) ? /* @__PURE__ */ (0, Q.jsx)(zt, { toast: e }) : null
	] });
}
export { Yt as DataCleanupPage };

//# debugId=c2946980-f57c-4ba7-ac20-f0c478d961df