/// Generate a timestamp representing now (UTC) in RFC3339 format.
pub fn now() -> &'static str {
    "2017-06-01T11:27:48Z"
}

/// Generate a timstamp string representing now (UTC).
pub fn short_now() -> &'static str {
    "2017-06-01"
}

/// Generate a SHA string
pub fn sha() -> &'static str {
    "6f24e3b731eb85909ff5a482e1bdfed3ed94caec"
}

/// Generate a short SHA string
pub fn short_sha() -> &'static str {
    "6f24e3b"
}

/// Generate the commit date string
pub fn commit_date() -> &'static str {
    "2017-05-15"
}

/// Generate the target triple string
pub fn target() -> &'static str {
    "x86_64-apple-darwin"
}

/// Generate a semver string
pub fn semver() -> &'static str {
    ""
}
