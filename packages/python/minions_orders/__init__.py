"""
Minions Orders Python SDK

Order records, service selections, onboarding checklists, and invoices
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Orders.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
